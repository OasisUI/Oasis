<template>
	<Modal
		v-model="show"
		class="o-PreviewImg"
	>
		<div class="o-PreviewImg__list">

			<button
				@click="preview(-1)"
				class="o-PreviewImg__prev"
				type="button"
			>
				<i class="iconfont icon-line-arrow-left"></i>
			</button>
			<Rahmen
				v-for="(img, index) in material.images"
				v-show="index === material.current"
				:src="img"
				:key="index"
				ratio="1"
				width="100%"
				type="fillMax"
				class="o-PreviewImg__img"
			></Rahmen>
			<button
				@click="preview(1)"
				class="o-PreviewImg__next"
				type="button"
			>
				<i class="iconfont icon-line-arrow-right"></i>
			</button>
		</div>
	</Modal>
</template>

<script>
	import Vue from 'vue'
	import Modal from '@oasis-ui/modal/src'
	import Rahmen from '@oasis-ui/rahmen/src'

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
				show: false
			}
		},
		mounted () {
			this.show = true

		},
		methods: {
			preview (step) {
				const current = this.material.current + step
				const maxIndex = this.material.images.length - 1
				this.material.current = current < 0 ? maxIndex : current > maxIndex ? 0 : current
			}
		},
		components: {
			Modal,
			Rahmen
		}
 	}
</script>
