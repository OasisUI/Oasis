<template>
	<div class="o-Form__item o-Row">
		<div
			v-if="label"
			class="o-Form__label"
			:class="[
				`o-Col-${layout.labelCol}`
			]"
		>
			<label>{{label}}</label>
		</div>
		<div
			class="o-Form__wrapper"
			:class="[
				`o-Col-${layout.wrapperCol}`,
				!label ?
					`o-Col-offset-${layout.labelCol}` : '',
			]"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import formItemLayoutValidator from './formItemLayoutValidator'

	const props = {
		label: String,
		formItemLayout: {
			validator: formItemLayoutValidator
		}
	}

	export default {
		name: 'FormItem',
		props,
		computed: {
			layout () {
				return this.formItemLayout || this.$parent.formItemLayout
			}
		},
		// https://github.com/vuejs/vue/issues/3690
	}
</script>
