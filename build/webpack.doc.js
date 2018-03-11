const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
	entry: path.join(__dirname, '../example/index.js'),
	output: {
		path: path.join(__dirname, '../docs'),
		filename: 'index.js',
	},
	devtool: '#source-map',
	resolve: {
		modules: ['node_modules'],
		extensions: ['.vue', '.js', '.json']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../example/index.html')
		})
	],
})
