<template>
	<ul class="doc">
		<li>
			<Upload
				url="https://jsonplaceholder.typicode.com/posts/"
				multiple
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
	.progressBox {
		width: 120px;
	}
</style>
