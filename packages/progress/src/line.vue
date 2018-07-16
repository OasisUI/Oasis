<template>
	<div
		:class="[
			`is-${status}`,
			{
				'is-showInfo': showInfo,
				'o-Progress--inline': inline
			}
		]"
		class="o-LineProgress"
	>
		<div class="o-LineProgress__bar">
			<div class="o-LineProgress__backup">
				<div
					:style="{
						width: percent,
					}"
					:class=""
					class="o-LineProgress__value"
				></div>
			</div>
		</div>
		<span
			v-if="showInfo"
			class="o-LineProgress__info"
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
		name: 'LineProgress',
		props,
		computed: {
			percent () {
				return parseInt(this.progress * 100) + '%'
			}
		}
	}
</script>
