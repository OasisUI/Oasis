<template>
	<label
		:class="{
			'is-disabled': isDisabled
		}"
		class="o-Input o-InputRadio"
	>
		<input
			v-model="currentVal"
			:value="label"
			:disabled="isDisabled"
			:name="name"
			type="radio"
		/>
		<span class="o-InputRadio__inner"></span>
		<slot></slot>
	</label>
</template>

<script>
	const props = {
		value: {},
		label: {},
		name: String,
		readonly: Boolean,
		disabled: Boolean
	}
	export default {
		name: 'Radio',
		props,
		computed: {
			currentVal: {
				set () {
					(this.useGroup ? this.group : this).$emit('input', this.label)
				},
				get () {
					return this.useGroup ? this.groupVal : this.value
				}
			},
			group () {
				return this.$parent
			},
			useGroup () {
				return this.group.$options.type === 'radioGroup'
			},
			groupVal () {
				return this.group.value
			},
			isDisabled () {
				return this.useGroup ?
					this.group.disabled || this.disabled
					: this.disabled
			}
		}
	}
</script>
