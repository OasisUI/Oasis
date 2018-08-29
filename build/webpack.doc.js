const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const pkgVersion = require('../packages/oasis/package').version

module.exports = merge(base, {
	entry: {
		app: path.join(__dirname, '../example/index.docs.js'),
		vendor: ['vue', 'vue-router']
	},
	output: {
		path: path.join(__dirname, '../docs/', pkgVersion),
		filename: '[name].js'
	},
	devtool: '#source-map',
	resolve: {
		modules: ['node_modules'],
		extensions: ['.vue', '.js', '.json']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../example/index.docs.html'),
			filename: path.join(__dirname, '../docs/index.html')
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new UglifyJSPlugin()
	]
})
