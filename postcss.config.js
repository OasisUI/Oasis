module.exports = {
	parser: 'postcss-scss',
	plugins: [
		require('precss'),		
		require('postcss-bem')({
			defaultNamespace: undefined,
			style: 'bem',
			separators: {
				descendent: '__'
			},
			shortcuts: {
				utility: 'util'
			}
		}),
		// require('postcss-bem-linter')('bem'),
		// require('autoprefixer'),
		require('postcss-cssnext'),
		require('cssnano')

	]
}
