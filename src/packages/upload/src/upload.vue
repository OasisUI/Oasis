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
			:multiple="multiple"
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
		name: 'Upload',
		props,
		data () {
			return {
				files: []
			}
		},
		methods: {
			onClick () {
				this.$refs.input.click()
			},
			onChange () {
				if (this.disabled) return
				this.files = Array.prototype.slice.call(this.$refs.input.files)
				// autoupload
				const check = this._beforeUpload(this.files)
				if (check !== false) {
					this.upload(this.files)
				} else {
					this._onCancel(check)
				}
			},
			_beforeUpload (files) {
				return this.beforeUpload && this.beforeUpload(files)
			},
			_onCancel (e) {
				this.onCancel && this.onCancel(e)
			},
			_onProgress (e) {
				const percent = parseInt(e.loaded / e.total * 100)
				this.onProgress && this.onProgress(percent || 0, e)
			},
			_onSuccess (e) {

			},
			_onError (e) {

			},
			_onTimeout (e) {
				// TODO
			},
			upload (files) {
				const upload = this.uploader || uploader
				files.map(file => {
					upload({
						url: this.url,
						filename: this.filename,
						file: file,
						onProgress: this._onProgress,
						onSuccess: this._onSuccess,
						onError: this._onError,
						onTimeout: this._onTimeout,
						headers: {
							'Access-Control-Allow-Origin': '*'
						}
					})
				})
			}
		}
	}
</script>
