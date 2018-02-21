<template>
	<div
		:class="{
			'is-showInfo': showInfo
		}"
		class="o-LineProgress"
	>
		<div class="o-LineProgress__bar">
			<div class="o-LineProgress__backup">
				<div
					:style="{
					width: percent
				}"
					class="o-LineProgress__value"
				></div>
			</div>
		</div>
		<span
			v-if="showInfo"
			class="o-LineProgress__info"
		>
			{{percent}}
		</span>
		<!--<svg-->
			<!--viewBox="0 0 100 4"-->
			<!--preserveAspectRatio="none"-->
		<!--&gt;-->
			<!--<path-->
				<!--d="M 0, 2 L 100, 2"-->
				<!--stroke-width="3"-->
				<!--class="o-LineProgress__backup"-->
			<!--&gt;</path>-->
			<!--&lt;!&ndash;<line x1="40" y1="210" x2="460" y2="210" stroke="url(#linearGradient-3)" stroke-width="30"/>&ndash;&gt;-->
			<!--<path-->
				<!--d="M 0, 2 L 100, 2"-->
				<!--stroke-width="3"-->
				<!--ref="line"-->
				<!--stroke="#34B697"-->
				<!--:stroke-dasharray="len"-->
				<!--:stroke-dashoffset="fill"-->
				<!--stroke-linecap="round"-->
				<!--class="o-LineProgress__value"-->
			<!--&gt;</path>-->
		<!--</svg>-->
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
		}
	}

	export default {
		name: 'LineProgress',
		props,
		computed: {
			percent () {
				return parseInt(this.progress * 100) + '%'
			}
		}
	}
</script>
