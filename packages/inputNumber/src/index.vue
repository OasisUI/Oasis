<template>
	<div
		:class="[
			disabled ? 'is-disabled' : '',
			readonly ? 'is-readonly' : '',
			'o-Input--' + size
		]"
		class="o-Input o-InputNumber"
	>
		<div class="o-Input__wrapper">
			<div
				v-if="suffix"
				class="o-InputNumber__suffixWrapper"
			>
				{{currentVal}}
				<span class="o-InputNumber__suffix">&nbsp;{{suffix}}</span>
			</div>
			<input
				ref="input"
				class="o-Input__native"
				type="text"
				:value="value"
				@change="onChange"
				@focus="onFocus"
				@blur="onBlur"
				:disabled="disabled"
				:readonly="readonly"
			/>
			<div
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
		</div>
	</div>
</template>

<script>
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
				currentVal: this.value
			}
		},
		computed: {
			disableAdd () {
				const { max, currentVal } = this
				return !isNaN(max) && currentVal >= max
			},
			disableSub () {
				const { min, currentVal } = this
				return !isNaN(min) && currentVal <= min
			}
		},
		watch: {
			currentVal: {
				handler (val) {
					const newVal = this.checkVal(number(val))
					this.$emit('input', newVal)
					this.$emit('change', newVal)
				}
			},
			value: {
				handler (val) {
					this.currentVal = val
				},
				immediate: true
			}
		},
		methods: {
			onChange (e) {
				const newVal = this.checkVal(number(e.target.value))
				this.$refs.input.value = newVal
				this.currentVal = newVal
			},
			onFocus (e) {
				this.$emit('focus', e)
			},
			onBlur (e) {
				this.$emit('blur', e)
			},
			increase () {
				if (this.disableAdd) return
				this.currentVal = this.calculate(this.currentVal, this.step)
			},
			decrease () {
				if (this.disableSub) return
				this.currentVal = this.calculate(this.currentVal, -this.step)
			},
			checkVal (val) {
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
		}
	}
</script>
