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
				class="o-Input__native"
				type="text"
				:value="currentVal"
				@input="onInput"
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
					@click="add"
					:class="{'is-disabled': disableAdd}"
					class="o-InputNumber__add"
				>
					<i class="iconfont icon-arrow-up"></i>
				</span>
				<span
					@click="sub"
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
		disabled: Boolean,
		readonly: Boolean,
		appendsuffix: Boolean,
	}

	export default {
		name: 'InputNumber',
		props,
		computed: {
			currentVal: {
				get () {
					return isNaN(parseFloat(this.value)) ? this.value : number(this.value)
				},
				set (val) {
					this.updateVal(val)
				}
			},
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
			value: {
				handler (val) {
					const newVal = this.formatVal(this.checkVal(number(val)))
					if (newVal !== val) {
						this.$emit('input', newVal)
					}
				},
				immediate: true
			}
		},
		methods: {
			onChange (e) {
				this.currentVal = number(e.target.value)
			},
			onInput (e) {
				this.currentVal = number(e.target.value)
			},
			onFocus (e) {
				this.$emit('focus', e)
			},
			onBlur (e) {
				this.$emit('blur', e)
			},
			add () {
				if (this.disableAdd) return
				this.currentVal = this.calculate(this.currentVal, this.step)
			},
			sub () {
				if (this.disableSub) return
				this.currentVal = this.calculate(this.currentVal, -this.step)
			},
			updateVal (val) {
				this.$emit('input', this.formatVal(this.checkVal(val)))
			},
			formatVal (val) {
				const { suffix, appendsuffix } = this
				return suffix && appendsuffix ? val + suffix : val
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
