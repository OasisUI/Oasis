<script>
	import CircleProgress from './circle'
	import LineProgress from './line'

	const props = {
		progress: {
			default: 0,
			validator (val) {
				return !isNaN(val)
			}
		},
		total: {
			default: 100,
			validator (val) {
				return !isNaN(val)
			}
		},
		showInfo: {
			default: true,
			type: Boolean
		},
		type: {
			default: 'line'
		},
		info: String,
		status: String,
		inline: Boolean
	}

	export default {
		name: 'Progress',
		props,
		render (h) {
			const component = this.type === 'line' ? LineProgress : CircleProgress
			return h(
				component,
				{
					props: {
						progress: this.percent,
						info: this.info,
						status: this.computedStatus,
						showInfo: this.showInfo,
						inline: this.inline
					}
				}
			)
		},
		computed: {
			percent () {
				return this.progress / this.total
			},
			computedStatus () {
				switch (this.status) {
					case 'primary': return 'primary'
					case 'danger': return 'danger'
					case 'warning': return 'warning'
					case 'success': return 'success'
					default: return 'primary'
				}
			}
		},
		components: {
			[CircleProgress.name]: CircleProgress,
			[LineProgress.name]: LineProgress
		}
	}
</script>
