<!--<template>-->
	<!--<div class="o-Progress">-->
		<!--<LineProgress-->
			<!--v-if="type === 'line'"-->
			<!--:progress="percent"-->
			<!--:info="info"-->
			<!--:status="computedStatus"-->
		<!--&gt;</LineProgress>-->
		<!--<CircleProgress-->
			<!--v-else-->
			<!--:progress="percent"-->
			<!--:info="info"-->
			<!--:status="computedStatus"-->
		<!--&gt;</CircleProgress>-->
	<!--</div>-->
<!--</template>-->

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
		type: {
			default: 'line'
		},
		info: String,
		status: String
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
						status: this.computedStatus
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
