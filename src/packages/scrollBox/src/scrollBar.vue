<script>
	import ElDraggable from 'utils/draggable'
	import { getDomSize } from "utils"

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
				visible: false,
				mile: 0
			}
		},
		mounted () {
			const { type } = this
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
				const elSize = getDomSize(this.$el)
				const thumbSize = getDomSize(thumb)
				this.mile = type === 'vertical' ?
					elSize.y - thumbSize.y : elSize.x - thumbSize.x
			}
		},
		computed: {
			style () {
				const style = {}
				const {
					mile,
					value,
					width
				} = this
				if (this.type === 'vertical') {
					style.height = `${width * 100}%`
					style.transform = `translateY(${mile * value}px)`
				} else {
					style.width = `${width * 100}%`
					style.transform = `translateX(${mile * value}px)`
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
				<transition name="o-ScrollBar">
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
				</transition>
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
				let { mile, value, type } = this
				value += (type === 'vertical' ? offset.y : offset.x) / mile
				if (value >= 0 && value <= 1) {
					this.$emit('input', value)
				}
			}
		}
	}
</script>
