<template lang="docs">
	# Message 消息

	## 基本使用

	message 弹窗最多同时显示 3 条，这是因为考虑到弹窗会占用不小的空间。

	:::html
		<Button
			@click="message"
			type="primary"
		>
			show message
		</Button>
	:::

	```javascript
		export default {
			methods: {
				message () {
					this.$message({
						type: 'success',
						text: 'Message',
					})
				}
			}
		}
	```

	## Description

	:::html
		<Button
			@click="$message({
					text: 'Message',
					description: 'Certainty listening no no behaviour existence assurance situation is. Because add why not esteems amiable him. Interested the unaffected mrs law friendship add principles. Indeed on people do merits to. ',
					duration: 0,
				})"
			type="warning"
		>
			show message
		</Button>
	:::

	你也可以尝试这样调用

	:::html
		<Button
			@click="$message.danger(
					'Message',
					// 以下参数是可选的
					{
						description: 'Certainty listening no no behaviour existence assurance situation is. Because add why not esteems amiable him. Interested the unaffected mrs law friendship add principles. Indeed on people do merits to. ',
						duration: 5000,
					}
				)"
			type="danger"
		>
			show message
		</Button>
	:::

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|type|消息状态类型，四种可选值：`info`，`danger`，`warning`，`success`|String|`info`
	|duration|消息显示时间，单位：`ms`|Number|3000
	|text|消息内容|String|空字符|
	|description|消息描述|String|空字符|

</template>

<script>
	export default {
		methods: {
			message () {
				this.$message({
					type: 'success',
					text: 'Message',
				})
			}
		}
	}
</script>
