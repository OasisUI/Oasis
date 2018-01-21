module.exports = {
	// parser: 'sugarss',
	plugins: [
		// require('postcss-mixins'),
		require('precss')(),
		require('saladcss-bem')({
			defaultNamespace: 'o',
			style: 'suit',
			separators: {
				descendent: '__'
			},
			shortcuts: {
				utility: 'u',
				component: 'c',
				descendent: 'd',
				modifier: 'm',
				state: 's'
			}
		}),
		require('postcss-cssnext'),			
		// require('postcss-bem-linter')('suit'),
		// require('cssnano')
	]
}
