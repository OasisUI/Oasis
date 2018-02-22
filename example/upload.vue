<template>
	<ul class="doc">
		<li>
			<Upload
				multiple
				url="https://jsonplaceholder.typicode.com/posts"
				:uploader="uploader"
				:on-success="onSuccess"
				:on-error="onError"
				:on-progress="onProgress"
				:on-cancel="onCancel"
			>
				<Button>upload file</Button>
			</Upload>
			<div class="progressBox">
				<Progress
					type="line"
					:progress="progress"
				></Progress>
				<Progress
					type="circle"
					:progress="progress"
				></Progress>
			</div>
		</li>
	</ul>
</template>

<script>
	import axios from 'axios'

	export default {
		data () {
			return {
				progress: 30
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
				return true
			},
			onCancel () {
				this.$message({
					type: 'error',
					text: 'cancel'
				})
			},
			onProgress (p, e) {
				console.log(this, p)
				this.progress = p
			},
			onError (e) {
				// this.progress = 0
			},
			onSuccess (e) {
				// this.progress = 0
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
