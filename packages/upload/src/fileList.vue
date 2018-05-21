<template>
	<ul class="o-UploadFiles">
		<li
			v-for="file in files"
			v-if="file.status !== 'success' && file.status !== 'danger'"
			class="o-UploadFiles__item"
		>
			<Progress
				type="line"
				:show-info="false"
				:progress="file.percent"
				:status="file.status"
			></Progress>
			<div class="o-UploadFiles__info">
				{{file.filename}}
				<label class="o-UploadFiles__progress">
					{{file.percent}} %
				</label>
			</div>
		</li>
	</ul>
</template>

<script>
	import Progress from '@oasis-ui/progress/src'

	const props = {
		files: {
			type: Array,
			default: []
		}
	}

	export default {
		name: 'FileList',
		props,
		components: {
			Progress
		}
	}
</script>
