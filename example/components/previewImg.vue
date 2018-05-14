<template lang="docs">
	# PreviewImg 图片预览

	## 基本使用

	:::html
		<Button
			@click="preview"
			type="primary"
		>
			PreviewImg
		</Button>
	:::

	```javascript
		methods: {
			preview () {
				this.$previewImg({
					current: 1,
					images: [
						'https://camo.githubusercontent.com/87882cd6c816edb053cfb6e3c7f0d8ab0af4aae3/68747470733a2f2f63646e2e7261776769742e636f6d2f6a6f653232332f4f617369732f6465762f69636f6e2f69636f6e2e7376673f73616e6974697a653d74727565',
						'https://cloud.githubusercontent.com/assets/848515/21667899/c46e1fba-d337-11e6-9f9b-62a28deb6d32.png'
					]
				})
			}
		}
	```

	## API
</template>

<script>
	export default {
		data () {
			return {
				show: false
			}
		},
		methods: {
			preview () {
				this.show = false
				this.$previewImg({
					current: 1,
					images: [
						'https://camo.githubusercontent.com/87882cd6c816edb053cfb6e3c7f0d8ab0af4aae3/68747470733a2f2f63646e2e7261776769742e636f6d2f6a6f653232332f4f617369732f6465762f69636f6e2f69636f6e2e7376673f73616e6974697a653d74727565',
						'https://cloud.githubusercontent.com/assets/848515/21667899/c46e1fba-d337-11e6-9f9b-62a28deb6d32.png'
					]
				})
			}
		}
	}
</script>
