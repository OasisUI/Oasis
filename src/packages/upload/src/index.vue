<template>
	<div class="o-UploadBox">
		<UploadFile
			:url="url"
			:files="files"
			:multiple="multiple"
			:accept="accept"
			:uploader="uploader"
			:before-upload="_beforeUpload"
			:on-success="_onSuccess"
			:on-error="_onError"
			:on-progress="_onProgress"
			:disabled="disabled"
			auto-upload
		>
			<slot></slot>
		</UploadFile>
		<FileList
			:files="files"
		></FileList>
	</div>
</template>

<script>
	import UploadFile from './upload'
	import FileList from './fileList'

	const props = {
		filename: {
			type: String,
			default: 'file'
		},
		autoUpload: {
			default: true,
			type: Boolean
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
			_beforeUpload (files) {
				return this.beforeUpload && this.beforeUpload(files)
			},
			_onProgress (e, file) {
				file.percent = e.percent
				this.onProgress && this.onProgress(e)
			},
			_onSuccess (e) {
				this.onSuccess && this.onSuccess(e)
			},
			_onError (e) {
				this.onError && this.onError(e)
			},
			_onTimeout (e) {
				this.onTimeout && this.onTimeout(e)
			}
		},
		components: {
			UploadFile,
			FileList
		}
	}
</script>
