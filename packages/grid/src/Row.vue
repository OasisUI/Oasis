<script>
	const props = {
		gutter: {
			type: String | Number,
		}
	}

	export default {
		name: 'Row',
		props,
		render (createElement) {
			const margin = `-${this.gutter}px`
			return createElement(
				'div',
				{
					class: ['o-Row'],
					style: {
						marginLeft: margin,
						marginRight: margin
					}
				},
				this.$slots.default
			)
		},
		provide () {
			return {
				gutter: this.gutter
			}
		}
	}
</script>
