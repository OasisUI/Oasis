<template>
	<form
		class="o-Upload"
	>
		<div
			@click="chooseFiles"
			class="o-Upload__picker"
		>
			<slot></slot>
		</div>
		<slot
			name="extra"
		></slot>
		<input
			ref="input"
			type="file"
			@change="onChange"
			:accept="accept"
			:multiple="multiple ? 'multiple' : ''"
			class="o-Upload__input"
		/>
	</form>
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
			chooseFiles () {
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
				this.$el.reset()
				this.files && this.files.push(...files)
				if (this.autoUpload) {
					this.upload()
				}
			},

			_beforeUpload (files) {
				return this.beforeUpload && this.beforeUpload(files)
			},

			upload () {
				const upload = (this.uploader || uploader)
				const files = this.files.filter(file => file.status === '')

				if (this._beforeUpload(files) === false) return

				files.map(file => {
					file.status = 'pending'
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
