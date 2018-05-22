<template>
	<div class="o-BtnGroup">
		<slot></slot>
	</div>
</template>

<script>
	const props = {
		type: {
			type: String,
			default: 'default'
		},
		size: {
			type: String,
			default: 'md'
		},
		round: Boolean,
		loading: Boolean,
		disabled: Boolean,
		ghost: Boolean,
		block: Boolean,
		gradient: Boolean
	}

	export default {
		props,
		name: 'ButtonGroup',
		type: 'buttonGroup'
	}
</script>
