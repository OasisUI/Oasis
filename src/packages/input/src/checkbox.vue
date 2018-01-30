<template>
	<label
		:class="{
			'is-disabled': disabled
		}"
		class="o-Input o-InputCheckbox">
		<input
			v-model="currentVal"
			:disabled="disabled"
			type="checkbox"
		/>
		<span class="o-InputCheckbox__inner"></span>
		<slot></slot>
	</label>
</template>

<script>
	const props = {
		value: {},
		readonly: Boolean,
		disabled: Boolean
	}
	export default {
		name: 'InputCheckbox',
		props,
		data () {
			return {

			}
		},
		computed: {
			currentVal: {
				set (val) {
					this.$emit('input', !!val)
				},
				get () {
					return !!this.value
				}
			}
		}
	}
</script>
