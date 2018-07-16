<script>
	const props = {
		span: {
			type: String,
			require: true
		},
		offset: {
			type: String,
			default: '0'
		}
	}
	export default {
		name: 'Col',
		props,
		render (createElement) {
			return createElement(
				'div',
				{
					class: [
						`o-Col-${this.span}`,
						`o-Col-offset-${this.offset}`
					],
					style: {
						paddingLeft: this.padding,
						paddingRight: this.padding
					}
				},
				this.$slots.default
			)
		},
 		computed: {
			padding () {
				return `${this.gutter}px`
			}
		},
		inject: {
			gutter: `gutter`
		}
	}
</script>
