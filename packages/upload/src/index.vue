<template>
	<div class="o-UploadBox">
		<UploadFile
			ref="upload"
			:url="url"
			:files="files"
			:multiple="multiple"
			:accept="accept"
			:uploader="uploader"
			:before-upload="_beforeUpload"
			:on-success="_onSuccess"
			:on-error="_onError"
			:on-progress="_onProgress"
			:on-timeout="_onTimeout"
			:disabled="disabled"
			:auto-upload="autoUpload"
		>
			<slot></slot>
			<slot
				name="extra"
				slot="extra"
			></slot>
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
		files: {
			default () {
				return []
			},
			type: Array
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
			},
			upload () {
				this.$refs.upload.upload()
			}
		},
		components: {
			UploadFile,
			FileList
		}
	}
</script>
