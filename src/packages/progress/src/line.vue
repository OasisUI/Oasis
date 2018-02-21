<template>
	<div class="o-LineProgress">
		<svg
			viewBox="0 0 100 4"
			preserveAspectRatio="none"
		>
			<path
				d="M 0, 2 L 100, 2"
				stroke-width="3"
				class="o-LineProgress__backup"
			></path>
			<!--<line x1="40" y1="210" x2="460" y2="210" stroke="url(#linearGradient-3)" stroke-width="30"/>-->
			<path
				d="M 0, 2 L 100, 2"
				stroke-width="3"
				ref="line"
				stroke="#34B697"
				:stroke-dasharray="len"
				:stroke-dashoffset="fill"
				stroke-linecap="round"
				class="o-LineProgress__value"
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
		name: 'LineProgress',
		props,
		data () {
			return {
				len: 100
			}
		},
		mounted () {
			this.len = Math.ceil(this.$refs.line.getTotalLength())
		},
		computed: {
			fill () {
				return this.len * (1 - this.percent)
			}
		}
	}
</script>
