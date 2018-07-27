<template>
	<label
		class="o-Input o-RadioBtn"
		:class="[
 			isDisabled ? 'is-disabled' : '',
			isChecked ? 'is-checked' : '',
			'o-Input--' + currentSize,
		]"
	>
		<slot></slot>
		<input
			v-model="currentValue"
			:value="label"
			:disabled="isDisabled"
			:name="name"
			@change="onChange"
			type="radio"
		/>
	</label>
</template>

<script>
	const props = {
		value: {},
		label: {},
		name: String,
		readonly: Boolean,
		disabled: Boolean,
		size: {
			type: String,
			default: 'md'
		},
	}

	export default {
		name: 'RadioBtn',
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
			},
			isChecked () {
				return this.currentValue === this.label
			},
			currentSize () {
				return this.useGroup ?
					this.group.size || this.size
					: this.size
			}
		},
		methods: {
			onChange () {
				(this.useGroup ? this.group : this).$emit('change', this.currentValue)
			}
		}
	}
</script>
