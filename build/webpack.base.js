const path = require('path')

module.exports = {
	resolve: {
		modules: ['node_modules'],	
		extensions: ['.vue', '.js', '.json'],
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
			}
		]
	}
}
