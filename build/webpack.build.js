const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
	entry: path.join(__dirname, '../src/packages/index.js'),
	output: {
		path: path.join(__dirname, '../lib'),
		filename: 'index.js',
	},
	externals: {
		vue: 'vue',
		lodash: 'lodash'
	},
	devtool: '#source-map',
	resolve: {
		modules: ['node_modules'],	
		extensions: ['.vue', '.js', '.json']
	},
	plugins: [
	]
})
