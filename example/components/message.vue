<template lang="docs">
	# Message 消息

	## 基本使用

	message 弹窗最多同时显示 3 条，这是因为考虑到弹窗会占用不小的空间。

	:::html
		<Button
			@click="showMessage"
			type="primary"
		>
			show message
		</Button>
	:::

	```javascript
		methods: {
			showMessage () {
				this.$message({
					text: `${this.text}`,
					duration: 5000,
					type: this.type
				})
			}
		}
	```

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|type|消息状态类型，四种可选值：`info`，`danger`，`warning`，`success`|String|`info`
	|duration|消息显示时间，单位：`ms`|Number|3000
	|text|消息内容|String|空字符|
</template>

<script>
	export default {
		data () {
			return {
				text: 'message'
			}
		},
		methods: {
			showMessage () {
				this.$message({
					text: `${this.text}`,
					duration: 5000,
				})
			}
		}
	}
</script>
