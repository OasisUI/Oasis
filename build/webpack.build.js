const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, '../src/packages/index.js'),
	output: {
		path: path.join(__dirname, '../lib'),
		filename: 'index.js',
	},
	devtool: '#cheap-module-eval-source-map',
	resolve: {
		modules: ['node_modules'],	
		extensions: ['.vue', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: 'css-loader'
			},
			{
				test: /\.js$/i,
				use: 'babel-loader'
			},
			{
				test: /\.vue$/i,
				use: 'vue-loader'
			}
		]
	},
	plugins: [
	]
}
