<template>
	<div
		class="o-Rahmen"
		:style="rahmenStyle"
	>
		<div
			class="o-Rahmen__image"
			:style="imageStyle"
		></div>
	</div>
</template>

<script>
	const props = {
		src: {
			type: String,
			default: ''
		},
		width: {
			type: String,
			default: '100%'
		},
		height: String,
		// ratio = height / width
		ratio: {
			default: 1,
			validator (val) {
				return !isNaN(val) && val > 0
			}
		},
		type: String
	}

	const RAHMEN_TYPE = {
		fill: 'center center / 100% 100% no-repeat ',
		fillMax: 'center center / contain no-repeat ',
		fillMin: 'center center / cover no-repeat ',
	}

	export default {
		name: 'Rahmen',
		props,
		computed: {
			rahmenStyle () {
				return {
					width: isNaN(this.width) ? this.width : this.width + 'px'
				}

			},
			imageStyle () {
				return {
					paddingTop: this.height === void (0) ? this.ratio * 100 + '%' : isNaN(this.height) ? this.height : this.height + 'px',
					background: (RAHMEN_TYPE[this.type] || RAHMEN_TYPE['fill']) + `url("${this.src}")`
				}
			}
		}

	}
</script>
