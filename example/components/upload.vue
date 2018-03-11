<template lang="docs">
	# Upload 上传

	## 基本使用

	:::html
		<Upload
			url="https://jsonplaceholder.typicode.com/posts/"
			multiple
			:uploader="uploader"
			:files="files"
			:on-success="onSuccess"
			:on-error="onError"
			:on-progress="onProgress"
			:on-cancel="onCancel"
		>
			<Button>upload file</Button>
		</Upload>
	:::

	## 自定义上传

	可以通过 `uploader` 参数设置自定义的上传方法，如以下示例。你必须在上传的 `progress` `error` `success` 三个状态中调用指定的方法。

	```javascript
		uploader ({url, file, onProgress, onSuccess, onError}) {
			let formData = new FormData()
			formData.append('file', file)
			return axios.post(url, formData, {
				onUploadProgress: onProgress
			}).then(res => {
				onSuccess(res)
			}).catch(err => {
				onError(err)
			})
		}
	```

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|url|上传地址|String|`''`|
	|multiple|上传多个文件|Boolean|`false`|
	|files|需要上传的文件列表|Array|`[]`|
	|uploader|自定义上传方法|Function|`undefined`|
	|beforeUpload|即将上传的回调方法，你可以在此方法内做文件校验，如果返回 `true` 则继续上传|Function|`undefined`|
	|onCancel|上传被取消的回调方法|Function|`undefined`|
	|onProgress|正在上传的回调方法|Function|`undefined`|
	|onError|上传错误的回调方法|Function|`undefined`|
	|onSuccess|上传成功的回调方法|Function|`undefined`|
</template>

<script>
	import axios from 'axios'

	export default {
		data () {
			return {
				files: [
					{
						filename: 'test.pdf',
						percent: 20
					},
					{
						filename: 'test2.mp3',
						percent: 88
					}
				]
			}
		},
		methods: {
			uploader ({url, file, onProgress, onSuccess, onError}) {
				let formData = new FormData()
				formData.append('file', file)
				return axios.post(url, formData, {
					onUploadProgress: onProgress
				}).then(res => {
					onSuccess(res)
				}).catch(err => {
					onError(err)
				})
			},
			beforeUpload (files) {
				// check files
				return true
			},
			onCancel () {
				this.$message({
					type: 'error',
					text: 'cancel'
				})
			},
			onProgress (e) {
			},
			onError (e) {
				this.status = 'danger'
			},
			onSuccess (e) {
				this.$message({
					type: 'success',
					text: 'success'
				})
			}
		}
	}
</script>

<style>
	.upload-demo {
		width: 420px;
	}
</style>
