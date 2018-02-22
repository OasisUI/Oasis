<template>
	<div class="o-Progress">
		<LineProgress
			v-if="type === 'line'"
			:progress="percent"
			:info="info"
		></LineProgress>
		<CircleProgress
			v-else
			:progress="percent"
			:info="info"
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
		},
		info: String
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
