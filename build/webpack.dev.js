const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
	entry: path.join(__dirname, '../example/index.js'),
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'index.js',
		publicPath: '/'
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../example/index.html')
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		stats: 'errors-only'
	}
})
