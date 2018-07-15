<script>
	import Input from '@oasis-ui/input'
	import Popup from '@oasis-ui/popup'
	import Menu from './menu'

	const props = {
		placeholder: String,
		readonly: Boolean,
		disabled: Boolean,
		value: {
			type: Array,
			required: true
		},
		separate: {
			type: String,
			default: '/'
		},
		options: {
			type: Array,
			default () {
				return []
			}
		},
		size: {
			type: String
		},
	}

	export default {
		name: 'Cascader',
		props,
		data () {
			return {
				optionGroup: [],
				currentValue: []
			}
		},
		render () {
			const popupId = this._uid
			const directives = [
				{
					name: 'popup',
					arg: popupId
				}
			]
			const style = {
				padding: '4px 0'
			}
			const $menu = this.optionGroup.map((options, index) => (
				<Menu
					options={options}
					index={index}
					value={this.currentValue}
				></Menu>
			))
			return (
				<Input
					onFocus={this.handleFocus}
					value={this.currentLabel}
					html-readonly
					placeholder={this.placeholder}
					readonly={this.readonly}
					disabled={this.disabled}
					{...{directives}}
					size={size}
					class="o-Cascader"
				>
					<Popup
						v-show={this.options && this.options.length && !this.disabled && !this.readonly}
						ref={popupId}
						slot='suffix'
						style={style}
						nested={true}
						showArrow={false}
						class="o-Cascader__popup"
					>
						<div class="o-Cascader__options">
							{$menu}
						</div>
					</Popup>
					<i
						slot='suffix'
						class='o-Cascader__trigger iconfont icon-arrow-down'
					/>
				</Input>
			)
		},
		created () {
			this.$on('select', this.handleSelect)
		},
		beforeDestroy () {
			this.$off('select', this.handleSelect)
		},
		methods: {
			handleSelect ({index, option}) {
				const currentValue = this.currentValue
				currentValue.splice(index, currentValue.length, option.value)
				const value = currentValue.map(item => item)
				const $popup = this.$refs[this._uid]

				if (option.children && option.children.length) {
					this.updateOptionGroup(index + 1, option.children)
				} else {
					this.$emit('input', value)

					if (!this.value.every((item, index) => item === value[index])) {
						this.$emit('change', value)
					}

					$popup.show = false
				}
			},
			handleFocus () {
				let {
					value,
					options
				} = this
				const optionGroup = [options]
				if (value.length > 1) {
					for (let index = 1; index < value.length; index++) {
						const option = options.find(option => (option.value === value[index - 1] && option.value !== void(0)))
						if (option
							&& option.children
							&& option.children.length
							&& option.children.find(item => (item.value === value[index] && value[index] !== void(0)))
						) {
							optionGroup.push(options = option.children)
						} else {
							options = []
							break
						}
					}
				}
				this.updateOptionGroup(0, ...optionGroup)
			},
			updateOptionGroup (startIndex, ...options) {
				const optionGroup = this.optionGroup
				optionGroup.splice(startIndex, optionGroup.length, ...options)
			}
		},
		computed: {
			currentLabel () {
				let label = []
				let {
					value,
					options
				} = this
				for (let index = 0; index < value.length; index++) {
					if (!Array.isArray(options)) break
					const option = options.find(option => option.value === value[index])
					if (option) {
						label.push(option.label)
						options = option.children || []
					} else {
						break
					}
				}
				return label.join(this.separate)
			}
		},
		watch: {
			value: {
				handler (val) {
					this.currentValue = val
				},
				deep: true,
				immediate: true
			}
		},
		components: {
			Menu,
			Input
		}
	}
</script>
