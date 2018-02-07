<template>
	<div class="o-Input"
 		:class="[
			'o-Input--' + size,
			{
				'is-disabled': disabled,
				'is-readonly': readonly
			}
		]"
	>
		<div
			class="o-Input__wrapper"
			:class="{
				'o-Input__addonWrapper': $slots.addonBefore || $slots.addonAfter
			}"
		>
			<span
				v-if="$slots.addonBefore"
				class="o-Input__addon"
			>
				<slot name="addonBefore"></slot>
			</span>
			<input
				v-model="currentVal"
				:disabled="disabled"
				:readonly="readonly"
				:placeholder="placeholder"
				class="o-Input__native"
				type="text"
			/>
			<span
				v-if="$slots.addonAfter"
				class="o-Input__addon"
			>
				<slot name="addonAfter"></slot>
			</span>
		</div>
	</div>
</template>

<script>
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
		placeholder: String
	}

	export default {
		name: 'Input',
		props,
		watch: {
			value (val) {
				this.currentVal = val
			}
		},
		computed: {
			currentVal: {
				set (val) {
					this.$emit('input', val)
				},
				get () {
					return this.value
				}
			}
		}
	}
</script>
