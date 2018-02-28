<script>
	import ElDraggable from 'utils/draggable'

	const props = {
		type: String,
		inner: {
			type: Number,
			default: 0
		},
		outer: {
			type: Number,
			default: 0
		},
		value: Number
	}

	export default {
		name: 'ScrollBar',
		props,
		data () {
			return {
				visible: false
			}
		},
		mounted () {
			const { thumb } = this.$refs
			if (thumb) {
				new ElDraggable(thumb, {
					containment: this.$el,
					throttle: 16,
					updateStyle: false,
					onDrag: this.onDrag,
					onStart: () => {
						thumb.classList.add('is-active')
					},
					onEnd: () => {
						thumb.classList.remove('is-active')
					}
				})
			}
		},
		computed: {
			style () {
				const style = {}
				const {
					inner,
					outer,
					value,
					width
				} = this
				if (this.type === 'vertical') {
					style.height = `${width * 100}%`
					style.transform = `translateY(${(inner - outer) * value}px)`
				} else {
					style.width = `${width * 100}%`
					style.transform = `translateX(${(inner - outer) * value}px)`
				}
				return style
			},
			width () {
				return this.outer / this.inner || 1
			}
		},
		render (h) {
			const {
				type,
				style,
				visible
			} = this
			return visible ? (
				<div
					class={[
						type === 'vertical' ? 'is-vertical' : 'is-horizontal',
						"o-ScrollBar"
					]}
				>
					<div
						ref="thumb"
						style={style}
						class="o-ScrollBar__thumb"
					></div>
				</div>
			) : ''
		},
		watch: {
			inner:{
				handler (val) {
					this.updateThumbSize()
				},
				immediate: true
			},
			outer: {
				handler (val) {
					this.updateThumbSize()
				},
				immediate: true
			},
		},
		methods: {
			updateThumbSize () {
				if (this.width < 1) {
					this.visible = true
				}
			},
			onDrag (e, position, offset) {
				let { inner, outer, value, type } = this
				value -= (type === 'vertical' ? offset.y : offset.x) / (outer - inner)
				if (value >= 0 && value <= 1) {
					this.$emit('input', value)
				}
			}
		}
	}
</script>
