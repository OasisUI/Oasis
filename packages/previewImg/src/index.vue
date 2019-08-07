<template>
	<Modal
		v-model="show"
		customClass="o-PreviewImg"
		customTransition="o-PreviewImg"
	>
		<div
			v-loading="image.status === 'loading'"
			class="o-PreviewImg__list">
			<button
				@click="preview(-1)"
				class="o-PreviewImg__prev"
				type="button"
			>
				<i class="iconfont icon-line-arrow-left"></i>
			</button>
			<div
				class="o-PreviewImg__img"
				:style="image.style">
				<img
					:style="{
						width: `${zoom * 100}%`
					}"
					:src="image.src">
			</div>
			<button
				@click="preview(1)"
				class="o-PreviewImg__next"
				type="button"
			>
				<i class="iconfont icon-line-arrow-right"></i>
			</button>
			<div class="o-PreviewImg__index">{{material.current + 1}}&nbsp;/&nbsp;{{material.images.length}}</div>

			<div class="o-PreviewImg__actionbar">
				<button
					@click="zoomImg(0.1)"
					class="o-PreviewImg__actionbar__action">
					<i class="iconfont icon-zoom-in"></i>
				</button>
				<button
					@click="zoomImg(-0.1)"
					class="o-PreviewImg__actionbar__action">
					<i class="iconfont icon-zoom-out"></i>
				</button>
				<button
					@click="downloadImg"
					class="o-PreviewImg__actionbar__action">
					<i class="iconfont icon-download"></i>
				</button>
			</div>
		</div>
	</Modal>
</template>

<script>
	import Vue from 'vue'
	import loadImage from 'utils/loadImage'
	import Modal from '@oasis-ui/modal'
	import Loading from '@oasis-ui/loading'
	import { getScrollSize } from 'utils'

	Vue.use(Loading)

	const props = {
		material: {
			type: Object,
			default () {
				return {
					// the index of images which is on show
					current: 0,
					images: []
				}
			}
		}
	}

	export default {
		name: 'PreviewImg',
		props,
		data () {
			return {
				show: false,
				image: {
					src: '',
					status: 'loading',
					style: {
						width: '0px',
						height: '0px'
					}
				},
				limit: {
					width: 0,
					height: 0
				},
				zoom: 1
			}
		},
		mounted () {
			this.show = true

			this.$nextTick(() => {
				const size = getScrollSize(document.body)

				this.limit = {
					width: size.x - 280,
					height: size.y
				}
				this.loadImage()
			})
		},
		methods: {
			preview (step) {
				const current = this.material.current + step
				const maxIndex = this.material.images.length - 1
				this.material.current = current < 0 ? maxIndex : current > maxIndex ? 0 : current
				this.loadImage()
			},

			loadImage () {
				const material = this.material
				const image = {
					src: material.images[material.current],
					status: 'loading',
					style: {
						width: '0px',
						height: '0px'
					}
				}
				loadImage(image.src).then(([res, img]) => {
					const limit = this.limit
					const ratio = img.width / img.height

					if (img.width > limit.width) {
						img.width = limit.width
						img.height = img.width / ratio
					}
					image.status = 'loaded'
					image.style = {
						width: img.width + 'px',
						height: img.height + 'px'
					}
				}).catch(err => {
					image.status = 'failed'
					console.log(err)
				})
				this.image = image
			},

			zoomImg (step) {
				const newZoom = this.zoom + step

				if (newZoom >= 0.3 && newZoom <= 1) {
					this.zoom = newZoom
				}
			},

			downloadImg () {
				if (window) {
					window.open(this.image.src, '_blank')
				}
			}
		},
		components: {
			Modal
		}
 	}
</script>
