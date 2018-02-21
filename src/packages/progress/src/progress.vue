<template>
	<div class="o-Progress">
		<LineProgress
			v-if="type === 'line'"
			:percent="percent"
		></LineProgress>
		<CircleProgress
			v-else
			:percent="percent"
		></CircleProgress>
	</div>
</template>

<script>
	import CircleProgress from './circle'
	import LineProgress from './line'

	const props = {
		progress: Number,
		total: {
			default: 100,
			validator (val) {
				return !isNaN(val)
			}
		},
		type: {
			default: 'line'
		}
	}

	export default {
		name: 'Progress',
		props,
		computed: {
			percent () {
				return this.progress / this.total
			}
		},
		components: {
			[CircleProgress.name]: CircleProgress,
			[LineProgress.name]: LineProgress
		}
	}
</script>
