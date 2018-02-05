<template>
	<div class="o-Form__item o-Row">
		<div
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
				`o-Col-${layout.wrapperCol}`
			]"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import formItemLayoutDescription from './formItemLayoutDescription'

	const props = {
		label: String,
		formItemLayout: formItemLayoutDescription
	}

	export default {
		name: 'FormItem',
		props,
		render (createElement) {
			return createElement (
				'div', {
					class: []
				},
				this.$slots.default
			)
		},
		computed: {
			layout () {
				return this.$parent.formItemLayout || this.formItemLayout
			}
		}
	}
</script>
