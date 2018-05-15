const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(base, {
	entry: path.join(__dirname, '../example/index.docs.js'),
	output: {
		path: path.join(__dirname, '../docs'),
		filename: 'index.js'
	},
	devtool: '#source-map',
	resolve: {
		modules: ['node_modules'],
		extensions: ['.vue', '.js', '.json']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../example/index.docs.html'),
			filename: path.join(__dirname, '../index.html')
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new UglifyJSPlugin()
	]
})
