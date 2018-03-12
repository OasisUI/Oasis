module.exports = {
	// parser: 'sugarss',
	plugins: [
		// require('postcss-mixins'),
		require('precss'),
		// require('postcss-import'),
		require('postcss-for'),
		require('postcss-bem')({
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
			browsers: ['ie > 8', 'last 2 versions'],
			cascade: false
		}),
		require('postcss-bem-linter')('suit'),
		// require('cssnano')
	]
}
