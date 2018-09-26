<template lang="docs">
	# Loading 加载

	## 基本使用

	:::html
		<Rahmen
			v-loading="true"
			src="https://cloud.githubusercontent.com/assets/848515/21667899/c46e1fba-d337-11e6-9f9b-62a28deb6d32.png"
			width="300px"
			style="position: relative;"
		></Rahmen>
	:::


	## 全局调用

	:::html
		<Button
			type="primary"
			@click="showLoadingMsg"
		>showLoadingMsg</Button>
	:::

	```javascript
		methods: {
			showLoadingMsg () {
				this.$loading(true)

				setTimeout(() => {
					this.$loading(false)
				}, 2000)
			}
		}
	```

</template>

<script>
	export default {
		data () {
			return {
				loadingStatus: false
			}
		},
		methods: {
			showLoadingMsg () {
				this.$loading(true)

				setTimeout(() => {
					this.$loading(false)
				}, 2000)
			}
		}
	}
</script>
