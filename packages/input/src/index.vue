<template>
	<div class="o-Input"
 		:class="[
 			disabled ? 'is-disabled' : '',
 			readonly ? 'is-readonly' : '',
			'o-Input--' + size
		]"
	>
		<div
			v-if="$slots.addonBefore"
			class="o-Input__addonWrapper"
		>
			<slot name="addonBefore"></slot>
		</div>
		<div
			:class="[
				'o-Input__wrapper',
				isFocused ? 'is-focused' : ''
			]"
		>
			<span
				v-if="$slots.prefix"
				class="o-Input__prefix"
			>
				<slot name="prefix"></slot>
			</span>
			<input
				v-model="currentVal"
				:disabled="disabled"
				:readonly="readonly"
				:placeholder="placeholder"
				@focus="onFocus"
				@blur="onBlur"
				@change="onChange"
				class="o-Input__native"
				:type="type"
			/>
			<span
				v-if="$slots.suffix"
				class="o-Input__suffix"
			>
				<slot name="suffix"></slot>
			</span>
		</div>
		<div
			v-if="$slots.addonAfter"
			class="o-Input__addonWrapper"
		>
			<slot name="addonAfter"></slot>
		</div>
	</div>
</template>

<script>
	import { getDomSize } from 'utils'

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
		placeholder: String
	}

	export default {
		name: 'Input',
		props,
		data () {
			return {
				currentVal: this.value || '',
				isFocused: false
			}
		},
		watch: {
			currentVal (val) {
				this.$emit('input', val)
			},
			value (val) {
				this.currentVal = val
			}
		},
		methods: {
			onFocus (e) {
				this.$emit('focus', e)
				this.isFocused = true
			},
			onBlur (e) {
				this.$emit('blur', e)
				this.isFocused = false
			},
			onChange (e) {
				this.$emit('change', e)
			}
		}
	}
</script>
