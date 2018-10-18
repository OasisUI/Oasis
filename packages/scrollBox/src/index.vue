<template>
	<div
		@mouseenter="onMouseenter"
		@mouseleave="onMouseleave"
		class="o-Scroll"
	>
		<div
			ref="scrollBox"
			:style="style"
			:class="[
				'o-Scroll__box',
				scrollX ? 'is-scrollX' : '',
				scrollY ? 'is-scrollY' : ''
			]"
		>
			<div
				ref="content"
				class="o-Scroll__content"
			>
				<slot></slot>
			</div>
		</div>
		<ScrollBar
			v-if="(hover || isDragging) && scrollY"
			v-model="scroll.y"
			:inner="scrollSize.y"
			:outer="size.y"
			type="vertical"
		></ScrollBar>
		<ScrollBar
			v-if="(hover || isDragging) && scrollX"
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
		scrollX: {
			type: Boolean,
			default: true
		},
		scrollY: {
			type: Boolean,
			default: true
		},
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
				const {
					scrollX,
					scrollY,
					scrollbarWidth
				} = this
				return {
					marginRight: scrollX ? `-${scrollbarWidth}px` : '',
					marginBottom: scrollY ? `-${scrollbarWidth}px` : ''
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
