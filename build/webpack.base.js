const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
	resolve: {
		modules: ['node_modules'],	
		extensions: ['.vue', '.js', '.json'],
		alias: {
			utils: path.resolve(__dirname, '../src/utils')
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.js$/i,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/i,
				use: 'vue-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000
						}
					}
				]
			},
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin()
	]
}
