const path = require('path')
const webpack = require('webpack')
const vueLoaderConfig = require('./vueLoaderConfig')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
	resolve: {
		modules: ['node_modules'],
		extensions: ['.vue', '.js', '.json'],
		alias: {
			utils: path.resolve(__dirname, '../utils'),
			// vue: 'vue'
			vue: 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, '../packages')
		}
	},
	module: {
		rules: [
			{
				test: /\.docs$/i,
				use: ['vue2-doc-loader']
			},
			{
				test: /\.css|postcss$/i,
				use: [
					{ loader: 'style-loader', options: { sourceMap: process.env.NODE_ENV !== 'prod' } },
					{ loader: 'css-loader', options: { sourceMap: process.env.NODE_ENV !== 'prod' } },
					{ loader: 'postcss-loader', options: { sourceMap: process.env.NODE_ENV !== 'prod' } },
					{ loader: 'sass-loader', options: { sourceMap: process.env.NODE_ENV !== 'prod' } }
				],
				exclude: /node_modules/
			},
			{
				test: /\.js$/i,
				use: ['babel-loader', 'eslint-loader'],
				exclude: [
					/node_modules/,
					path.resolve(__dirname, '../packages/oasis/lib/index.min.js')
				]
			},
			{
				test: /\.vue$/i,
				use: [
					{
						loader: 'vue-loader'
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
		new FriendlyErrorsPlugin(),
		new VueLoaderPlugin()
	]
}
