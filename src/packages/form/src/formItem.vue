<!--<template>-->
	<!--<div-->
		<!--class="o-FormItem o-Row"-->
		<!--:class="[-->
			<!--required ? 'is-required' : ''-->
		<!--]"-->
	<!--&gt;-->
		<!--<div-->
			<!--v-if="label"-->
			<!--class="o-FormItem__label"-->
			<!--:class="[-->
				<!--`o-Col-${layout.labelCol}`-->
			<!--]"-->
		<!--&gt;-->
			<!--<label>{{label}}</label>-->
		<!--</div>-->
		<!--<div-->
			<!--class="o-FormItem__wrapper"-->
			<!--:class="[-->
				<!--`o-Col-${layout.wrapperCol}`,-->
				<!--!label ?-->
					<!--`o-Col-offset-${layout.labelCol}` : '',-->
			<!--]"-->
		<!--&gt;-->
			<!--&lt;!&ndash;<slot size="lg"></slot>&ndash;&gt;-->
		<!--</div>-->
	<!--</div>-->
<!--</template>-->

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
		render (h) {
			const slot = this.$slots.default[0]
			if (slot) slot.componentOptions.propsData.size = 'lg'
			return h(
				'div',
				{
					'class': [
						'o-FormItem',
						'o-Row', this.required ? 'is-required' : ''
					]
				},
				[
					this.label ? h(
						'div',
						{
							'class': [
								'o-FormItem__label',
								`o-Col-${this.layout.labelCol}`
							]
						},
						[h('label', this.label)]
					) : '',
					h(
						'div',
						{
							'class': [
								'o-FormItem__wrapper',
								`o-Col-${this.layout.wrapperCol}`,
								!this.label ? `o-Col-offset-${this.layout.labelCol}` : ''
							],
						},
						[slot]
					)
				]
			)
		},
		computed: {
			layout () {
				return this.formItemLayout || this.$parent.formItemLayout
			}
		}
		// https://github.com/vuejs/vue/issues/3690
	}
</script>
