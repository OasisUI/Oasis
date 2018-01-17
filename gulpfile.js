const gulp = require('gulp')
const util = require('gulp-util')
const postcss = require('gulp-postcss')
const cssmin = require('gulp-cssmin')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const WebpackDevConfig = require('./build/webpack.dev')
const WebpackBuildConfig = require('./build/webpack.build')

// console.log(WebpackDevConfig)

gulp.task('build:module', () => {
	const compiler = webpack(WebpackDevConfig)	
	gulp.watch(['./example', './src'], function () {
		compiler.run((err, stats) => {
			console.log(err)
		})
	})
})

gulp.task('dev:server', () => {
	const compiler = webpack(WebpackBuildConfig)
	
	new WebpackDevServer(compiler, {
		publicPath: '/',
		stats: {
			colors: true
		},
		contentBase: 'dist/'
	}).listen(2333, '127.0.0.1', err => {
		util.log(err)
	})
})

gulp.task('build:theme', function() {
	return gulp.src('./src/theme/**/*.scss')
		.pipe(postcss())
		.pipe(gulp.dest('./lib/theme'))
})

gulp.task('default', ['dev:build', 'dev:server'])
