<template>
	<div class="o-InputGroup">
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
