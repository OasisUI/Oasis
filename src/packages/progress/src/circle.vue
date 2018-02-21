<template>
	<div class="o-CircleProgress">
		<svg viewBox="0 0 100 100">
			<path
				d="M 50 3, a 47 47 0 1 1 0, 94, a 47 47 0 1 1 0, -94"
				stroke-width="3"
				fill="none"
				class="o-CircleProgress__backup"
			></path>
			<path
				ref="circle"
				d="M 50 3, a 47 47 0 1 1 0, 94, a 47 47 0 1 1 0, -94"
				stroke-width="3"
				fill="none"
				stroke="#34B697"
				:stroke-dasharray="len"
				:stroke-dashoffset="fill"
				stroke-linecap="round"
				class="o-CircleProgress__value"
			></path>
		</svg>
	</div>
</template>

<script>
	const props = {
		percent: {
			default: 0,
			validator (val) {
				return !isNaN(val)
			}
		}
	}

	export default {
		name: 'CircleProgress',
		props,
		data () {
			return {
				len: 296
			}
		},
		mounted () {
			this.len = Math.ceil(this.$refs.circle.getTotalLength())
		},
		computed: {
			fill () {
				return this.len * (1 - this.percent)
			}
		}
	}
</script>
