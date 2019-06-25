<template lang="docs">
	# Modal 模态框

	## 基本使用

	模态框 `slot` 有三种，`header` `default` `footer`。其中 `header` 为模态框的标题，`default` 为主体内容，`footer` 一般用来放置注脚或交互按钮等。

	:::html
		<Button
			@click="show = !show"
			type="primary"
		>
			Toggle modal box
		</Button>
		<Modal v-model="show">
			<!--header-->
			<h2 slot="header">Hello world!</h2>
			<!--default-->
			<div>
				<p>Proin eget tortor risus.</p>
			</div>
			<!--footer-->
			<template slot="footer">
				<Button
					@click="show = false"
					type="primary"
					ghost
				>
					取消
				</Button>
				<Button
					@click="onConfirm"
					type="primary"
				>
					确定
				</Button>
			</template>
		</Modal>
	:::

	模态框有以下变体，`Alert` `Confirm` `Prompt`。

	## Alert 弹框

	`Alert` 框有四种类型，`info` `success` `danger` `warning`，这一点与 `Message` 组件一致。你可以点击按钮尝试一下。

	<Button @click="alert('info')">
		info
	</Button>
	<Button @click="alert('success')" type="primary">
		success
	</Button>
	<Button @click="alert('danger')" type="danger">
		danger
	</Button>
	<Button @click="alert('warning')" type="warning">
		warning
	</Button>

	```javascript
		alert (type = 'info') {
			this.$alert({
				type: type,
				title: type,
				content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p><p>Curabitur aliquet quam id dui posuere blandit.</p>',
				confirmText: 'OK'
			}).then(res => {
				this.$message.success('confirm')
			}).catch(err => {
				this.$message.danger('cancel')
			})
		},
	```

	## Confirm 确认

	询问用户是否需要进行接下来的操作。

	<Button type="primary" @click="confirm">
		$confirm
	</Button>

	```javascript
		confirm () {
			this.$confirm({
				title: '《Jane Eyre》',
				content: 'Do you think, because I am poor, obscure, plain and little, I am soulless and heartless?',
				confirmText: 'Yes',
				cancelText: 'No'
			}).then(res => {
				this.$message.danger('confirm')
			}).catch(err => {
				this.$message.success('cancel')
			})
		},
	```

	## Prompt 提交

	要求用户输入一个值。

	<Button type="primary" @click="prompt">
		$prompt
	</Button>

	```javascript
		prompt () {
			this.$prompt({
				title: 'What is your name?',
				validator (value) {
					if (value.length > 5) {
						return new Error('value is overlength!')
					}
				},
				onError: (err) => {
					this.$message.danger(err.message)
				}
			}).then(value => {
				this.$message.success(`Hello ${value}`)
			}).catch(err => {
				this.$message.danger('cancel')
			})
		}
	```

	## API

	### Alert

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|type|警告框状态类型，`info` `success` `danger` `warning`|String|`info`|
	|title|弹框标题|String|`'提示'`|
	|content|弹框内容|String|空字符|
	|confirmText|弹框确认按钮|String|`'确定'`|
	|onConfirm|弹框确认回调方法|Function|`undefined`|

	### Confirm

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|title|弹框标题|String|`'提示'`|
	|content|弹框内容|String|空字符|
	|confirmText|弹框确认按钮|String|`'确定'`|
	|cancelText|弹框取消按钮|String|`'取消'`|
	|onConfirm|弹框确认回调方法|Function|`undefined`|
	|onCancel|弹框取消回调方法|Function|`undefined`|

	### Prompt

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|title|弹框标题|String|`'提示'`|
	|content|弹框内容|String|空字符|
	|customClass|弹框自定义样式类|String|空字符|
	|validator|输入值检验|Function| |
	|onError|输入值未通过检验|Function| |
	|confirmText|弹框确认按钮|String|`'确定'`|
	|cancelText|弹框取消按钮|String|`'取消'`|
	|onConfirm|弹框确认回调方法|Function|`undefined`|
	|onCancel|弹框取消回调方法|Function|`undefined`|
</template>

<script>
	export default {
		data () {
			return {
				show: false
			}
		},
		methods: {
			onConfirm () {
				this.show = false
				this.$message({
					type: 'success',
					text: 'confirmed ！',
					duration: 2000
				})
			},
			alert (type = 'info') {
				this.$alert({
					type: type,
					title: type,
					content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p><p>Curabitur aliquet quam id dui posuere blandit.</p>',
					confirmText: 'OK'
				}).then(res => {
					this.$message.success('confirm')
				}).catch(err => {
					this.$message.danger('cancel')
				})
			},
			confirm () {
				this.$confirm({
					title: '《Jane Eyre》',
					content: 'Do you think, because I am poor, obscure, plain and little, I am soulless and heartless?',
					confirmText: 'Yes',
					cancelText: 'No'
				}).then(res => {
					this.$message.danger('confirm')
				}).catch(err => {
					this.$message.success('cancel')
				})
			},
			prompt () {
				this.$prompt({
					title: 'What is your name?',
					validator (value) {
						if (value.length > 5) {
							return new Error('value is overlength!')
						}
					},
					onError: (err) => {
						this.$message.danger(err.message)
					}
				}).then(value => {
					this.$message.success(`Hello ${value}`)
				}).catch(err => {
					this.$message.danger('cancel')
				})
			}
		}
	}
</script>
