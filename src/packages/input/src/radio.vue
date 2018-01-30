<template>
	<label
		:class="{
			'is-disabled': disabled
		}"
		class="o-Input o-InputRadio">
		<input
			v-model="currentVal"
			:value="label"
			:disabled="disabled"
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
		label: String,
		name: String,
		readonly: Boolean,
		disabled: Boolean
	}
	export default {
		name: 'InputRadio',
		props,
		computed: {
			currentVal: {
				set (val) {
					this.$emit('input', val ? this.label : '')
				},
				get () {
					return this.value
				}
			}
		}
	}
</script>
