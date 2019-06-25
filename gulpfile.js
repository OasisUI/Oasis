const fs = require('fs')
const gulp = require('gulp')
const rimraf = require('rimraf')
const util = require('gulp-util')
const webpack = require('webpack')
const watch = require('gulp-watch')
const postcss = require('gulp-postcss')
const genProdConfig = require('./build/genSubpackageConfig')
const WebpackDevServer = require('webpack-dev-server')
const WebpackDevConfig = require('./build/webpack.dev')
const WebpackDocConfig = require('./build/webpack.doc')
const WebpackBuildConfig = require('./build/webpack.prod')

const libPath = './packages/oasis/lib'
const themePath = './packages/theme'

gulp.task('build:prod', ['build:packages'], () => {
	webpack(WebpackBuildConfig, (err, stats) => {
		if (err) {
			console.log(err)
		} else {
			console.log('[Build core package]: oasis success')
		}
	})
})

gulp.task('build:packages', done => {
	const pkgs = fs.readdirSync('./packages')
	const errs = []
	const excludes = ['theme', 'oasis']
	const tasks = pkgs.filter(pkg => !excludes.includes(pkg)).map(pkg => {
		return new Promise((resolve, reject) => {
			webpack(genProdConfig(pkg), (err, stats) => {
				if (err) {
					errs.push(`[Build failed in ${pkg}] ${err}`)
				} else {
					console.log('[Build package]:', pkg, 'success')
				}
				resolve()
			})
		})
	})

	Promise.all(tasks).then(() => {
		console.log('[Build subpackages]: done')
		if (errs.length) {
			errs.forEach(err => console.log(err))
		}
	}, err => console.log('[Build subpackages]: failed', err))
		.finally(done)
})

gulp.task('build:doc', () => {
	const compiler = webpack(WebpackDocConfig, (err, stats) => {
		err && console.log(err)
	})
})

gulp.task('dev:server', () => {
	const compiler = webpack(WebpackDevConfig)
	new WebpackDevServer(compiler, {
		publicPath: '/',
		stats: {
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false,
			errorDetails: true,
			hash: true
		},
		contentBase: 'dist/'
	}).listen(2333, '127.0.0.1', err => {
		err && util.log(err)
	})
})

gulp.task('dev:theme', function () {
	return watch(`${themePath}/**/*.css`, function () {
		gulp.src(`${themePath}/index.css`)
			.pipe(postcss())
			.on('error', err => {
				err && console.log(err.name, err.reason, err.file, err.line + '/' + err.column)
			})
			.pipe(gulp.dest(`${libPath}/theme`))
	})
})

gulp.task('build:theme', function () {
	return gulp.src(`${themePath}/index.css`)
		.pipe(postcss())
		// minify
		.pipe(gulp.dest(`${libPath}/theme`))
})

gulp.task('copy', function () {
	return gulp.src(`${themePath}/font/*`)
		.pipe(gulp.dest(`${libPath}/theme/font`))
})

gulp.task('lint:theme', function () {
	return gulp.src(`${themePath}/**/*.css`)
		.pipe(require('gulp-stylelint')({
			debug: true,
			reporters: [
				{formatter: 'string', console: true}
			]
		}))
})

gulp.task('dev', ['dev:server', 'dev:theme'])

gulp.task('build', function () {
	rimraf('./packages/oasis/theme', function () {
		gulp.start(['copy', 'build:prod', 'build:theme'], function () {
			rimraf('./docs', () => {})
			rimraf('./index.html', () => {})
		})
	})
})
