<template>
	<div class="o-InputRadioGroup clearfix">
		<slot></slot>
	</div>
</template>
<script>
	const props = {
		value: {},
		size: String,
		disabled: Boolean
	}

	export default {
		name: 'RadioGroup',
		type: 'radioGroup',
		props,
	}
</script>
