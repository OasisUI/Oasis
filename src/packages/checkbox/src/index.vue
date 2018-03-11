<template>
	<label
		:class="{
			'is-disabled': isDisabled
		}"
		class="o-Input o-InputCheckbox">
		<input
			v-model="currentVal"
				:value="label"
			:disabled="isDisabled"
			type="checkbox"
		/>
		<span class="o-InputCheckbox__inner"></span>
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
		computed: {
			currentVal: {
				set (val) {
					(this.useGroup ? this.group : this).$emit('input', val)
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
		}
	}
</script>
