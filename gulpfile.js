const gulp = require('gulp')
const util = require('gulp-util')
const webpack = require('webpack')
const watch = require('gulp-watch')
const postcss = require('gulp-postcss')
const WebpackDevServer = require('webpack-dev-server')
const WebpackDevConfig = require('./build/webpack.dev')
const WebpackDocConfig = require('./build/webpack.doc')
const WebpackBuildConfig = require('./build/webpack.build')

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
			hash: true,
		},
		contentBase: 'dist/'
	}).listen(2333, '127.0.0.1', err => {
		util.log(err)
	})
})

gulp.task('dev:theme', function () {
	return watch('./src/theme/**/*.css', function () {
		gulp.src('./src/theme/index.css')
			.pipe(postcss())
			.on('error', err => {
				console.log(err.name, err.reason, err.file, err.line + '/' + err.column)
			})
			.pipe(gulp.dest('./lib/theme'))

	})
})

gulp.task('build:theme', function() {
	return gulp.src('./src/theme/**/*.css')
		.pipe(postcss())
		// minify
		.pipe(gulp.dest('./lib/theme'))
})

gulp.task('dev', ['dev:theme', 'dev:server'])

gulp.task('build', ['build:module', 'build:theme', 'build:doc'])
