<template>
	<div>
		<slot></slot>
	</div>
</template>
<script>
	const props = {
		value: {},
		disabled: Boolean
	}

	export default {
		name: 'RadioGroup',
		type: 'radioGroup',
		props,
	}
</script>
