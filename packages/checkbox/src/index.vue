<template>
	<label
		:class="{
			'is-disabled': isDisabled,
			'is-focused': isFocused,
			'is-checked': isChecked
		}"
		class="o-Input o-Checkbox">
		<input
			v-model="currentVal"
			:value="label"
			:disabled="isDisabled"
			@focus="isFocused = true"
			@blur="isFocused = false"
			type="checkbox"
			class="u-invisible"
		/>
		<span class="o-Checkbox__inner"></span>
		<slot></slot>
	</label>
</template>

<script>
	const props = {
		value: {},
		label: {},
		readonly: Boolean,
		disabled: Boolean
	}
	export default {
		name: 'Checkbox',
		props,
		data () {
			return {
				isFocused: false
			}
		},
		computed: {
			currentVal: {
				set (val) {
					const instance = (this.useGroup ? this.group : this)
					instance.$emit('input', val)
					instance.$emit('change', val)
				},
				get () {
					return this.useGroup ? this.group.value : this.value
				}
			},
			group () {
				return this.$parent
			},
			useGroup () {
				return this.group.$options.type === 'checkboxGroup'
			},
			isDisabled () {
				return this.useGroup ?
					this.group.disabled || this.disabled
					: this.disabled
			},
			isChecked () {
				const {
					label,
					currentVal
				} = this
				if (typeof currentVal === 'boolean') {
					return currentVal
				} else if (Array.isArray(currentVal)) {
					return currentVal.indexOf(label) > -1
				}
			}
		}
	}
</script>
