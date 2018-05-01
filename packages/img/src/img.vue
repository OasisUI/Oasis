<template>
	<div class="o-Img">
		<img v-show="show === 1" :src="newSrc" alt="" @load="onLoad" @error="onError">
		<div v-if="show === 2" class="o-Img__loading" type="button">
			<!-- TODO use loading icon -->
		</div>
		<div v-if="show === 0" class="o-Img__backup">
			<label>{{failedMsg}}</label>
		</div>
	</div>
</template>

<script>
	const props = {
		src: {
			type: String,
			default () {
				return ''
			}
		},
		suffix: {
			default () {
				return ''
			}
		},
		failedMsg: {
			type: String,
			default: () => '图片加载失败'
		}
	}

	export default {
		name: 'Img',
		props,
		data () {
			return {
				show: true,		// 0 failed, 1 succeed, 2 loading
				success: false,
				useWebp: false
			}
		},
		mounted () {
			this.load(this.src)
		},
		computed: {
			newSrc () {
				const suffix = typeof this.suffix === 'function' ? this.suffix() : this.suffix
				return this.src + suffix
			}
		},
		methods: {
			load (src = "") {
				this.show = 2
			},
			onError () {
				this.show = 0
			},
			onLoad () {
				this.show = 1
			}
		},
		watch: {
			src (src) {
				this.load(src)
			}
		}
	}
</script>
