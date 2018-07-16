<template>
	<div
		:class="[
			`is-${status}`,
			{
				'is-showInfo': showInfo,
				'o-Progress--inline': inline
			}
		]"
		class="o-CircleProgress"
	>
		<svg
			class="o-CircleProgress__bar"
			viewBox="0 0 100 100"
		>
			<path
				d="M 50 3, a 47 47 0 1 1 0, 94, a 47 47 0 1 1 0, -94"
				stroke-width="6"
				fill="none"
				class="o-CircleProgress__backup"
			></path>
			<path
				ref="circle"
				d="M 50 3, a 47 47 0 1 1 0, 94, a 47 47 0 1 1 0, -94"
				stroke-width="6"
				fill="none"
				:stroke-dasharray="len"
				:stroke-dashoffset="fill"
				stroke-linecap="round"
				class="o-CircleProgress__value"
			></path>
		</svg>
		<span
			class="o-CircleProgress__info"
		>
			{{info || percent}}
		</span>
	</div>
</template>

<script>
	const props = {
		progress: {
			default: 0,
			validator (val) {
				return !isNaN(val)
			}
		},
		showInfo: {
			default: true,
			type: Boolean
		},
		info: String,
		status: {
			type: String,
			default: 'primary'
		},
		inline: Boolean
	}

	export default {
		name: 'CircleProgress',
		props,
		data () {
			return {
				len: 296
			}
		},
		computed: {
			fill () {
				return this.len * (1 - this.progress)
			},
			percent () {
				return parseInt(this.progress * 100) + '%'
			}
		}
	}
</script>
