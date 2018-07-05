<script>
	import {
		formatSelectOptions
	} from 'utils'
	import Popup from '@oasis-ui/popup'
	import Input from '@oasis-ui/input'

	const props = {
		value: {},
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'md'
		},
		type: {
			type: String,
			default: 'text'
		},
		placeholder: String,
		options: Array
	}

	export default {
		name: 'Select',
		props,
		data () {
			return {
				currentValue: this.value
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
			const options = this.currentOptions

			return (
				<Input
					disabled={this.disabled}
					readonly={this.readonly}
					size={this.size}
					type={this.type}
					placeholder={this.placeholder}
					value={this.value}
					onInput={this.onInput}
					onChange={this.onChange}
					onFocus={this.onFocus}
					onBlur={this.onBlur}
					{...{directives}}
					class='o-Select'
					html-readonly
				>
					<Popup
						v-show={options.length && !this.disabled && !this.readonly}
						slot='suffix'
						style={style}
						nested={true}
						showArrow={false}
						ref={popupId}
						class='o-Input__popup'
					>
						<ul
							ref='list'
							onClick={this.setValue}
							class='o-Input__options'
						>
							{options.map(option => {
								return (<li class={option.selected ? 'is-selected' : ''}>
									{option.key}
								</li>)
							})}
						</ul>
					</Popup>
					<i
						slot='suffix'
						class='o-Select__trigger iconfont icon-arrow-down'
					/>
				</Input>
			)
		},
		methods: {
			setValue (e) {
				const $popup = this.$refs[this._uid]
				const list = this.$refs.list.children
				const index = Array.prototype.indexOf.call(list, e.target)
				const value = this.currentOptions[index] && this.currentOptions[index].value
				let changed = false
				if (value !== this.value) {
					changed = true
				}
				changed && this.$emit('input', value)
				this.$emit('select', value)
				changed && this.$emit('change', value)
				this.$nextTick(() => {
					$popup.show = false
				})
			},

			onInput (value) {
				this.$emit('input', value)
			},

			onChange (value) {
				this.$emit('change', value)
			},

			onFocus (...arg) {
				this.$emit('focus', ...arg)
			},

			onBlur (...arg) {
				this.$emit('blur', ...arg)
			}
		},
		computed: {
			currentOptions () {
				return formatSelectOptions(this.options, this.value)
			}
		}
	}
</script>
