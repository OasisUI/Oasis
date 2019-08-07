const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = function (moduleName, devMode = false) {
	return merge(base, {
		entry: path.join(__dirname, `../packages/${moduleName}/index.js`),
		output: {
			path: path.join(__dirname, `../packages/${moduleName}/lib`),
			filename: 'index.min.js',
			library: moduleName,
			libraryTarget: 'umd',
			umdNamedDefine: true
		},
		watch: devMode,
		externals: [
			{
				vue: {
					amd: 'vue',
					root: 'Vue',
					commonjs: 'vue',
					commonjs2: 'vue'
				},
				moment: 'moment'
			},
			/^@oasis-ui/
		],
		devtool: '#source-map',
		resolve: {
			modules: ['node_modules'],
			extensions: ['.vue', '.js', '.json']
		},
		plugins: devMode ? [] : [
			new UglifyJSPlugin()
		]
	})
}
