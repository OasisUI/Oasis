<template>
	<div class="img-box">
		<img v-show="show === 1" :src="newSrc" alt="" @load="onLoad" @error="onError">
		<button v-if="show === 2" class="img-loading" type="button">
			<i class="iconfont icon-icon-loading"></i>
		</button>
		<div v-if="show === 0" class="backup">
			<label>图片加载失败</label>
		</div>
	</div>
</template>

<script>
	const props = ['src']

	export default {
		name: 'image',
		props,
		data () {
			return {
				show: true,		// 0 failed, 1 succeed,  2 loading
				success: false,
				useWebp: false
			}
		},
		mounted () {
			if (Cookies.get('useWebp')) this.useWebp = true
			this.load(this.src)
		},
		computed: {
			newSrc () {
				return (this.useWebp ? this.src.replace('_ac', '_acwbp') : this.src) || 'no-src'
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
