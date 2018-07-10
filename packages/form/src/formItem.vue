<script>
	import {
		getParentComponent
	} from '../../../utils'

	const props = {
		label: String,
		prop: String,
		required: Boolean,
		tip: String,
		// errorMsg: String,
		// isError: Boolean,
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
			const slots = this.$slots.default
			slots && slots.map(slot => {
				if (slot.componentOptions) {
					slot.componentOptions.propsData.size = 'lg'
				}
			})
			const labelStyle = {
				'width': this._labelWidth
			}
			const wrapperStyle = {
				'margin-left': this._labelWidth
			}
			const $label = this.label !== void(0) ? (
				<label
					class={['o-FormItem__label', ]}
					style={labelStyle}
				>{this.label}</label>
			) : null
			const $tip = <p class={['o-FormItem__tip']}>{this.errorMsg || this.tip}</p>

			return <div class={[
					'o-FormItem clearfix',
					this.isError ? 'is-error' : '',
					this.required ? 'is-required' : ''
				]}>
				{$label}
				<div
					class='o-FormItem__wrapper'
					style={wrapperStyle}
				>
					{slots}
					{$tip}
				</div>
			</div>
		},

		watch: {
			'$parent.verifyResult': {
				handler (verifyResult) {
					if (verifyResult && verifyResult[this.prop]) {
						this.isError = !Boolean(verifyResult[this.prop].__status__)
						this.errorMsg = verifyResult[this.prop].msg
					} else {
						this.isError = false
						this.errorMsg = ''
					}
				},
				deep: true
			}
		},

		computed: {
			_labelWidth () {
				const { $parent, labelWidth } = this
				return $parent.inline || $parent.blockLabel ? '' : `${$parent.labelWidth || labelWidth}px`
			},

			$from () {
				return getParentComponent(this, 'FormGroup')
			}
		}
		// https://github.com/vuejs/vue/issues/3690
	}
</script>
