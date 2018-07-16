<template>
	<label
		:class="{
			'is-disabled': isDisabled
		}"
		class="o-Input o-Radio"
	>
		<input
			v-model="currentValue"
			:value="label"
			:disabled="isDisabled"
			:name="name"
			@change="onChange"
			type="radio"
		/>
		<span class="o-Radio__inner"></span>
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
			currentValue: {
				set (value) {
					(this.useGroup ? this.group : this).$emit('input', value)
				},
				get () {
					return this.useGroup ? this.groupValue : this.value
				}
			},
			group () {
				return this.$parent
			},
			useGroup () {
				return this.group.$options.type === 'radioGroup'
			},
			groupValue () {
				return this.group.value
			},
			isDisabled () {
				return this.useGroup ?
					this.group.disabled || this.disabled
					: this.disabled
			}
		},
		methods: {
			onChange (e) {
				this.$nextTick(() => {
					this.$emit('change', this.currentValue)
				})
			}
		}
	}
</script>
