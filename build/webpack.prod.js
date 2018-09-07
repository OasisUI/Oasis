const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(base, {
	entry: path.join(__dirname, '../packages/oasis/index.js'),
	output: {
		path: path.join(__dirname, '../packages/oasis/lib'),
		filename: 'index.min.js',
		library: 'Oasis',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	externals: {
		vue: {
			// TODO
			amd: 'vue',
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue'
		},
		moment: 'moment'
	},
	devtool: '#source-map',
	resolve: {
		modules: ['node_modules'],
		extensions: ['.vue', '.js', '.json']
	},
	plugins: [
		new UglifyJSPlugin()
	]
})
