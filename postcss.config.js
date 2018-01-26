module.exports = {
	// parser: 'sugarss',
	plugins: [
		// require('postcss-mixins'),
		require('precss')(),
		require('saladcss-bem')({
			defaultNamespace: 'o',
			style: 'suit',
			separators: {
				descendent: '__',
				modifier: '--',
			},
			shortcuts: {
				utility: 'u',
				component: 'c',
				descendent: 'd',
				modifier: 'm',
				state: 's'
			}
		}),
		require('postcss-cssnext')({
			browsers: ['ie > 9', 'last 2 versions'],
			cascade: false
		}),
		require('postcss-bem-linter')('suit'),
		// require('cssnano')
	]
}
