<template>
	<ul class="o-UploadFiles">
		<li
			v-for="file in files"
		>
			<Progress
				type="line"
				:progress="file.percent"
				:status="file.status"
			></Progress>
			{{file.name}} -
		</li>
	</ul>
</template>

<script>
	const props = {
		files: {
			type: Array,
			default: []
		}
	}
	export default {
		name: 'FileList',
		props,
		watch: {
			files (val) {
				console.log(window.f = val)
			}
		}
	}
</script>
