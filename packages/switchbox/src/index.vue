<template>
    <label
		:class="[
			'o-Switchbox',
			{
				'is-disabled': disabled
			}
		]"
	>
        <input
			v-model="currentValue"
			:disabled="disabled"
			class="o-Switchbox__native u-invisible"
			type="checkbox"
		/>
        <span class="o-Switchbox__status">{{ currentValue ? label[0] : label[1] }}</span>
		<span class="o-Switchbox__slot"></span>
    </label>
</template>

<script>
    const props = {
        label: {
            type: Array,
            required: false,
            default () {
                return ['', '']
            }
        },
        value: {
            type: Boolean,
            default: false,
            required: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
    }
    export default {
        name: 'Switchbox',
        props,
        computed: {
            currentValue: {
                get () {
                    return !!this.value
                },
                set (val) {
					this.$emit('input', val)
					this.$emit('change', val)
                }
            }
        }
    }
</script>
