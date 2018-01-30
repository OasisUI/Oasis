<template>
	<div class="o-Input">
		<slot></slot>
	</div>
</template>

<script>
	const props = {
		value: {},
		disabled: Boolean
	}

	export default {
		name: 'CheckboxGroup',
		type: 'checkboxGroup',
		props
	}
</script>
