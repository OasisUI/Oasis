<template>
	<div
		@click="onClick"
		class="o-Upload"
	>
		<slot></slot>
		<input
			ref="input"
			type="file"
			@change="onChange"
			:accept="accept"
			:multiple="multiple ? 'multiple' : ''"
			class="o-Upload__input"
		/>
	</div>
</template>

<script>
	import uploader from './uploader'

	const props = {
		filename: {
			type: String,
			default: 'file'
		},
		autoUpload: {
			default: true,
			type: Boolean
		},
		files: Array,
		url: String,
		uploader: Function,
		multiple: Boolean,
		accept: String,
		disabled: Boolean,
		beforeUpload: Function,
		onProgress: Function,
		onSuccess: Function,
		onError: Function,
	}

	export default {
		name: 'UploadFile',
		props,
		methods: {
			onClick () {
				this.$refs.input.click()
			},
			onChange () {
				if (this.disabled) return
				const files = Array.prototype.slice.call(this.$refs.input.files).map(file => {
					return {
						status: '',
						percent: 0,
						file: file,
						filename: file.name
					}
				})
				this.files && this.files.push(...files)
				if (!this.autoUpload) return
				const check = this._beforeUpload(files)
				if (check !== false) {
					this.upload(files)
				}
			},
			_beforeUpload (files) {
				return this.beforeUpload && this.beforeUpload(files)
			},
			upload (files) {
				files = files || this.files
				const upload = this.uploader || uploader
				files.map(file => {
					upload({
						url: this.url,
						filename: this.filename,
						file: file.file,
						onProgress: e => {
							e.percent = parseInt(e.loaded / e.total * 100) || 0
							this.onProgress && this.onProgress(e, file)
						},
						onSuccess: e => {
							file.status = 'success'
							this.onSuccess && this.onSuccess(e)
						},
						onError: e => {
							file.status = 'danger'
							this.onError && this.onError(e)
						},
						onTimeout: e => {
							file.status = 'danger'
							this.onTimeout && this.onTimeout(e)
						}
					})
				})
			}
		}
	}
</script>
