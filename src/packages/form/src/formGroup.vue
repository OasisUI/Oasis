<template>
	<form class="o-FormGroup">
		<slot></slot>
	</form>
</template>

<script>
	import formItemLayoutValidator from './formItemLayoutValidator'

	const props = {
		formItemLayout: {
			default: {
				labelCol: 4,
				wrapperCol: 20
			},
			validator: formItemLayoutValidator
		}
	}
	export default {
		name: 'FormGroup',
		props,
		// TODO: validate form
	}
</script>
