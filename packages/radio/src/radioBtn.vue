<template>
	<label
		class="o-Input o-InputRadioBtn"
		:class="[
 			isDisabled ? 'is-disabled' : '',
			'o-Input--' + currentSize,
			isChecked ? 'is-checked' : ''
		]"
	>
		<slot></slot>
		<input
			v-model="currentVal"
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
			},
			isChecked () {
				return this.currentVal === this.label
			},
			currentSize () {
				return this.useGroup ?
					this.group.size || this.size
					: this.size
			}
		},
		methods: {
			onChange () {
				this.$emit('change', this.currentVal)
			}
		}
	}
</script>
