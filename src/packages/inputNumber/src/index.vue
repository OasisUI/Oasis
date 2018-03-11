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
				<span class="o-InputNumber__suffix">&nbsp{{suffix}}</span>
			</div>
			<input
				class="o-Input__native"
				type="text"
				v-model="currentVal"
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
					:class="{'is-disabled': !isNaN(max) && currentVal >= max}"
					class="o-InputNumber__add"
				>
					<i class="iconfont icon-arrow-up"></i>
				</span>
				<span
					@click="sub"
					:class="{'is-disabled': !isNaN(min) && currentVal <= min}"
					class="o-InputNumber__sub"
				>
					<i class="iconfont icon-arrow-down"></i>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
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
		data () {
			return {
				currentVal: void(0)
			}
		},
		watch: {
			value: {
				handler (val) {
					this.currentVal = parseFloat(val)
					this.updateVal()
				},
				immediate: true
			},
		},
		methods: {
			onChange (e) {
				this.currentVal = parseFloat(0 + e.target.value)
				this.updateVal()
			},
			onFocus (e) {
				this.$emit('focus', e)
			},
			onBlur (e) {
				this.$emit('blur', e)
			},
			add () {
				this.currentVal += this.step
				this.updateVal()
			},
			sub () {
				this.currentVal -= this.step
				this.updateVal()
			},
			updateVal () {
				this.checkVal()
				const { suffix, currentVal, appendsuffix } = this
				this.$emit('input', suffix && appendsuffix ? currentVal + suffix : currentVal)
			},
			checkVal () {
				const { max, min, currentVal } = this
				if (!isNaN(max) && currentVal > max) {
					this.currentVal = max
				}
				if (!isNaN(min) && currentVal < min) {
					this.currentVal = min
				}
			}
		}
	}
</script>
