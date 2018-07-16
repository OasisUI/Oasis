<template>
	<div
		@mouseenter="onMouseenter"
		@mouseleave="onMouseleave"
		class="o-Scroll"
	>
		<div
			ref="scrollBox"
			class="o-Scroll__box"
		>
			<div
				ref="content"
				:style="style"
				class="o-Scroll__content"
			>
				<slot></slot>
			</div>
		</div>
		<ScrollBar
			v-if="hover || isDragging"
			v-model="scroll.y"
			:inner="scrollSize.y"
			:outer="size.y"
			type="vertical"
		></ScrollBar>
		<ScrollBar
			v-if="hover || isDragging"
			v-model="scroll.x"
			:inner="scrollSize.x"
			:outer="size.x"
			type="horizontal"
		></ScrollBar>
	</div>
</template>

<script>
	import ScrollBar from './scrollBar'
	import Resizing from 'utils/resizing'
	import scrollbarWidth from 'utils/scrollbarWidth'
	import {
		getDomSize,
		getScrollSize
	} from 'utils'

	const props = {
		autoHide: {
			type: Boolean,
			default: true
		}
	}
	export default {
		name: 'Scroll',
		props,
		data () {
			return {
				size: {
					x: 0,
					y: 0
				},
				scrollSize: {
					x: 0,
					y: 0
				},
				scroll: {
					x: 0,
					y: 0
				},
				hover: false,
				resizing: null,
				isDragging: false,
				scrollbarWidth: 17
			}
		},
		mounted () {
			if (!this.$isServer) {
				this.updateScrollSize()
				this.size = getDomSize(this.$el)
				this.scrollbarWidth = scrollbarWidth()
				this.resizing = new Resizing(this.$el)
				this.resizing.on(this.onResizing)
				this.$refs.content.addEventListener('scroll', e => {
					this.scroll.x = e.target.scrollLeft / this.mileX
				})
				this.$refs.scrollBox.addEventListener('scroll', e => {
					this.scroll.y = e.target.scrollTop / this.mileY
				})
			}
		},
		computed: {
			style () {
				const width = this.scrollbarWidth
				return {
					marginRight: `-${width}px`,
					marginBottom: `-${width * 2}px`,
					paddingBottom: `${width}px`
				}
			},
			mileX () {
				return this.scrollSize.x - this.size.x
			},
			mileY () {
				return this.scrollSize.y - this.size.y
			}
		},
		methods: {
			onMouseenter () {
				this.updateScrollSize()
				this.hover = true
			},
			onMouseleave () {
				if (this.autoHide) this.hover = false
			},
			onResizing () {
				this.size = getDomSize(this.$el)
			},
			updateScrollSize () {
				const scrollSize = getScrollSize(this.$refs.content)
				this.scrollSize = {
					x: scrollSize.x,
					y: scrollSize.y - this.scrollbarWidth
				}
			}
		},
		watch: {
			scroll: {
				handler (val) {
					const { content, scrollBox } = this.$refs
					if (!content) return
					content.scrollLeft = val.x * this.mileX
					scrollBox.scrollTop = val.y * this.mileY
				},
				deep: true,
				immediate: true
			}
		},
		components: {
			ScrollBar
		},
	}
</script>
