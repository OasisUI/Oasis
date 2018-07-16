const gulp = require('gulp')
const rimraf = require('rimraf')
const util = require('gulp-util')
const webpack = require('webpack')
const watch = require('gulp-watch')
const postcss = require('gulp-postcss')
const WebpackDevServer = require('webpack-dev-server')
const WebpackDevConfig = require('./build/webpack.dev')
const WebpackDocConfig = require('./build/webpack.doc')
const WebpackBuildConfig = require('./build/webpack.build')

const libPath = './packages/oasis/lib'
const themePath = './packages/theme'

gulp.task('build:module', () => {
	const compiler = webpack(WebpackBuildConfig)
	compiler.run((err, stats) => {
		err && console.log(err)
	})
})

gulp.task('build:doc', () => {
	const compiler = webpack(WebpackDocConfig)
	compiler.run((err, stats) => {
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
		gulp.start(['copy', 'build:module', 'build:theme'], function () {
			rimraf('./docs', () => {})
			rimraf('./index.html', () => {})
		})
	})
})
