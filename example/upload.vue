<template>
	<ul class="doc">
		<li class="upload-demo">
			<Upload
				url="https://jsonplaceholder.typicode.com/posts/"
				multiple
				:files="files"
				:on-success="onSuccess"
				:on-error="onError"
				:on-progress="onProgress"
				:on-cancel="onCancel"
			>
				<Button>upload file</Button>
			</Upload>
		</li>
	</ul>
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
