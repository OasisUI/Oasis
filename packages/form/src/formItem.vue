<script>
	const props = {
		label: String,
		required: Boolean,
		labelWidth: {
			type: String,
			default: '80'
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
						this.required ? 'is-required' : ''
					]
				},
				[
					this.label !== void (0) ? h(
						'label',
						{
							'class': [
								'o-FormItem__label'
							],
							'style': {
								'width': this._labelWidth
							}
						},
						this.label
					) : null,
					h(
						'div',
						{
							'class': [
								'o-FormItem__wrapper'
							],
							'style': {
								'margin-left': this._labelWidth
							}
						},
						[slot]
					)
				]
			)
		},
		computed: {
			_labelWidth () {
				const { $parent, labelWidth } = this
				return $parent.inline || $parent.blockLabel ? '' : `${$parent.labelWidth || labelWidth}px`
			}
		}
		// https://github.com/vuejs/vue/issues/3690
	}
</script>
