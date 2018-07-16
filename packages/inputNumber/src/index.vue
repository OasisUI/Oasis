<template>
	<o-input
		ref="input"
		type="text"
		:value="currentValue"
		@change="onChange"
		@focus="onFocus"
		@blur="onBlur"
		:disabled="disabled"
		:readonly="readonly"
		class="o-Input o-InputNumber"
	>
		<span slot="suffix">{{suffix}}</span>
		<div
			slot="suffix"
			v-show="!disabled && !readonly"
			class="o-InputNumber__actions"
		>
			<span
				@click="increase"
				:class="{'is-disabled': disableAdd}"
				class="o-InputNumber__add"
			>
				<i class="iconfont icon-arrow-up"></i>
			</span>
			<span
				@click="decrease"
				:class="{'is-disabled': disableSub}"
				class="o-InputNumber__sub"
			>
				<i class="iconfont icon-arrow-down"></i>
			</span>
		</div>
	</o-input>
</template>

<script>
	import Input from '@oasis-ui/input'
	import { number } from 'utils'

	const props = {
		value: {},
		size: {
			type: String,
			default: 'md'
		},
		step: {
			default: 1,
			type: Number
		},
		suffix: {
			type: String,
			default: ''
		},
		max: Number,
		min: Number,
		precision: {
			type: Number,
			default: 1
		},
		disabled: Boolean,
		readonly: Boolean
	}

	export default {
		name: 'InputNumber',
		props,
		data () {
			return {
				currentValue: this.value
			}
		},
		computed: {
			disableAdd () {
				const { max, currentValue } = this
				return !isNaN(max) && currentValue >= max
			},
			disableSub () {
				const { min, currentValue } = this
				return !isNaN(min) && currentValue <= min
			}
		},
		watch: {
			currentValue: {
				handler (val) {
					const newVal = this.checkValue(number(val))
					this.$emit('input', newVal)
					this.$emit('change', newVal)
				}
			},
			value: {
				handler (val) {
					this.currentValue = val
				},
				immediate: true
			}
		},
		methods: {
			onChange (value) {
				const newVal = this.checkValue(number(value))
				this.$refs.input.currentValue = newVal
				this.currentValue = newVal
			},
			onFocus (e) {
				this.$emit('focus', e)
			},
			onBlur (e) {
				this.$emit('blur', e)
			},
			increase () {
				if (this.disableAdd) return
				this.currentValue = this.calculate(this.currentValue, this.step)
			},
			decrease () {
				if (this.disableSub) return
				this.currentValue = this.calculate(this.currentValue, -this.step)
			},
			checkValue (val) {
				const { max, min } = this
				if (!isNaN(max) && val > max) {
					val = max
				}
				if (!isNaN(min) && val < min) {
					val = min
				}
				return val
			},
			calculate (...val) {
				const multiple = 1 / this.step
				return val.reduce((prev, next) => prev * 1 + next * multiple, 0) / multiple
			}
		},
		components: {
			'o-input': Input
		}
	}
</script>
