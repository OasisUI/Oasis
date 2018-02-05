<template>
	<form class="o-Form__group">
		<slot></slot>
	</form>
</template>

<script>
	import formItemLayoutDescription from './formItemLayoutDescription'

	const props = {
		formItemLayout: formItemLayoutDescription
	}
	export default {
		name: 'FormGroup',
		props,


	}
</script>
