<template lang="docs">
	# Progress 进度条

	## 基本使用

	:::html
		<Progress
			type="line"
			:show-info="true"
			:progress="58"
			status="success"
		></Progress>
		<Progress
			type="line"
			:show-info="true"
			:progress="68"
			status="danger"
		></Progress>
		<Progress
			type="line"
			:show-info="true"
			:progress="78"
			status="warning"
		></Progress>
	:::

	## 环形进度条

	:::html
		<Progress
			inline
			type="circle"
			:show-info="true"
			:progress="58"
			status="success"
		></Progress>
		<Progress
			inline
			type="circle"
			:show-info="true"
			:progress="68"
			status="danger"
		></Progress>
		<Progress
			inline
			type="circle"
			:show-info="true"
			:progress="78"
			status="warning"
		></Progress>
	:::
</template>

<script>
	export default {
		data () {
			return {
			}
		}
	}
</script>
