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
		require('postcss-reporter')({ clearReportedMessages: true }),
		process.env.ENV === 'prod' ? require('cssnano')(
			{
				discardComments: {
					removeAll: true
				},
				autoprefixer: false
			}
		) : null
	]
}
