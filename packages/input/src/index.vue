<template>
	<div class="o-Input"
 		:class="[
 			disabled ? 'is-disabled' : '',
 			readonly ? 'is-readonly' : '',
			type !== 'textarea' ? 'o-Input--' + size : '',
			resize ? 'o-Input--resizable' : '',
			`o-Input--${type}`
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
			<textarea
				v-if="type === 'textarea'"
				:cols="cols"
				:rows="rows"
				:resize="resize"
				:value="currentValue"
				:disabled="disabled"
				:readonly="readonly || htmlReadonly"
				:placeholder="placeholder"
				ref="input"
				@input="onInput"
				@focus="onFocus"
				@blur="onBlur"
				@change="onChange"
				class="o-Input__native"
				:type="type"
				:max="max"
				:min="min"
				:maxlength="maxlength"
				:minlength="minlength"
				:autofocus="autofocus"
				:spellcheck="spellcheck"
				:style="{
					resize: resize
				}"
			></textarea>
			<input
				v-else
				:value="currentValue"
				:disabled="disabled"
				:readonly="readonly || htmlReadonly"
				:placeholder="placeholder"
				ref="input"
				@input="onInput"
				@focus="onFocus"
				@blur="onBlur"
				@change="onChange"
				class="o-Input__native"
				:type="type"
				:max="max"
				:min="min"
				:maxlength="maxlength"
				:minlength="minlength"
				:autofocus="autofocus"
				:spellcheck="spellcheck"
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
			default: 'lg'
		},
		type: {
			type: String,
			default: 'text'
		},
		max: [String, Number],
		min: [String, Number],
		maxlength: [String, Number],
		minlength: [String, Number],
		placeholder: String,
		htmlReadonly: Boolean,
		autofocus: Boolean,
		spellcheck: Boolean,

		// textarea
		rows: [String, Number],
		cols: [String, Number],
		resize: {
			type: String,
			default: 'auto'			// vertical, horizontal, none
		}
	}

	export default {
		name: 'Input',
		props,
		data () {
			return {
				currentValue: this.value,
				isFocused: false
			}
		},
		watch: {
			currentValue (val) {
				this.$emit('input', val)
			},
			value (val) {
				this.currentValue = val
			}
		},
		methods: {
			onInput (e) {
				this.currentValue = e.target.value
			},
			onFocus (e) {
				this.$emit('focus', e)
				this.isFocused = true
			},
			onBlur (e) {
				this.$emit('blur', e)
				this.isFocused = false
			},
			onChange (e) {
				this.$emit('change', this.currentValue)
			}
		}
	}
</script>
