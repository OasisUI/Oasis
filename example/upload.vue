<template>
	<ul class="doc">
		<li>
			<Upload
				multiple
				:uploader="uploader"
				:on-success="onSuccess"
				:on-error="onError"
				:on-progress="onProgress"
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
			uploader (files, onProgress) {
				let formData = new FormData()
				formData.append('file', files[1])
				return axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
					onUploadProgress: onProgress
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
