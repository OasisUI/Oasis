module.exports = {
	plugins: [
		require('postcss-import')({
			plugins: [
				require('stylelint')({})
			]
		}),
		require('postcss-nested'),
		require('postcss-for'),
		require('saladcss-bem')({
			defaultNamespace: 'o',
			style: 'suit',
			separators: {
				descendent: '__',
				modifier: '--'
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
		require('postcss-discard-empty'),
		require('postcss-normalize-whitespace'),
		require('postcss-svgo'),
		require('postcss-reporter')({ clearReportedMessages: true })
		// require('cssnano')
	]
}
