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
	const props = {
		uploader: Function,
		multiple: Boolean,
		accept: String,
		disabled: Boolean,
		onProgress: Function,
		onSuccess: Function,
		onError: Function,
	}
	export default {
		name: 'Upload',
		props,
		methods: {
			onClick () {
				this.$refs.input.click()
			},
			onChange () {
				if (this.disabled) return
				const uploader = this.uploader || this._uploader
				const { onSuccess, onError } = this
				const files = this.$refs.input.files
				uploader(files, this._onProgress).then(res => {
					onSuccess && onSuccess(res)
				}).catch(err => {
					onError && onError(err)
				})
			},
			_onProgress (e) {
				this.onProgress && this.onProgress(parseInt(e.loaded / e.total * 100), e)
			},
			_uploader () {
				// TODO
			}
		}
	}
</script>
