const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, '../example/index.js'),
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'index.js',
		publicPath: '/'
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
				test: /\.scss$/i,
				use: 'style-loader!css-loader!postcss-loader'
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
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../example/index.html')
		})
	]
}
