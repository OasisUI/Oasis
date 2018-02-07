<template>
	<div
		class="o-FormItem o-Row"
		:class="[
			required ? 'is-required' : ''
		]"
	>
		<div
			v-if="label"
			class="o-FormItem__label"
			:class="[
				`o-Col-${layout.labelCol}`
			]"
		>
			<label>{{label}}</label>
		</div>
		<div
			class="o-FormItem__wrapper"
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
		required: Boolean,
		formItemLayout: {
			validator: formItemLayoutValidator
		}
	}

	export default {
		name: 'FormItem',
		type: 'formItem',
		props,
		computed: {
			layout () {
				return this.formItemLayout || this.$parent.formItemLayout
			}
		},
		// https://github.com/vuejs/vue/issues/3690
	}
</script>
