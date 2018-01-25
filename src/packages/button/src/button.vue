<template>
	<button class="o-Btn"
		:class="[
			'o-Btn--' + type,
			'o-Btn--' + size,
			'o-Btn--' + shap
		]"
		type="button"
	>
		<slot></slot>
	</button>
</template>

<script>
	const props = {
		type: {
			type: String,
			default: 'primary'
		},
		size: {
			type: String,
			default: 'md'
		},
		shap: {
			type: String,
			default: 'circle'
		},
		loading: Boolean,
		disabled: Boolean,
		outline: Boolean,
	}

	export default {
		name: 'o-button',
		props,
		data () {
			return {}
		}
	}
</script>
