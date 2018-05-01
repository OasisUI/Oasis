const path = require('path')
const webpack = require('webpack')
const vueLoaderConfig = require('./vueLoaderConfig')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
	resolve: {
		modules: ['node_modules'],
		extensions: ['.vue', '.js', '.json'],
		alias: {
			utils: path.resolve(__dirname, '../utils'),
			// vue: 'vue'
			vue: 'vue/dist/vue.esm.js'
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
				use: ['babel-loader', 'eslint-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.vue$/i,
				use: [
					{
						loader: 'vue-loader',
						options: vueLoaderConfig
					}
				]
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
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 6000
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin()
	]
}
