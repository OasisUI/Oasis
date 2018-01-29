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
			<input
				class="o-InputNumber__suffix"
				:value="`${currentVal} ${suffix}`"
				type="text"
			/>
			<input
				class="o-InputNumber__input"
				type="text"
				v-model="currentVal"
				@change="onChange"
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
		value: {
			required: true
		},
		size: {
			type: String,
			default: 'md'
		},
		step: {
			type: Number,
			default: 1
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
				currentVal: parseFloat('0' + this.value)
			}
		},
		watch: {
			value (val) {
				this.currentVal = parseFloat(val)
			},
		},
		methods: {
			onChange (e) {
				this.currentVal = parseFloat('0' + e.target.value)
				this.updateVal()
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

<!--<style lang="scss" scoped>-->

	<!--$btn-size: 36px;-->
	<!--$btn-color: #E1E1E1;-->
	<!--.input-number {-->
		<!--display: inline-block;-->
		<!--width: 100%;-->
		<!--border: 1px solid #E1E1E1;-->
		<!--border-radius: 4px;-->

		<!--&.disabled {-->
			<!--background: #EEE;-->
			<!--color: #989898;-->
			<!--input {-->
				<!--cursor: not-allowed;-->
			<!--}-->
		<!--}-->

		<!--.input-suffix {-->
			<!--color: #9d9d9d;-->
			<!--/*display: inline-block;*/-->
			<!--/*float: left;*/-->
		<!--}-->

		<!--.current-val {-->
			<!--position: relative;-->
			<!--height: 100%;-->
			<!--padding-right: 38px;-->

			<!--.add,-->
			<!--.sub {-->
				<!--position: absolute;-->
				<!--display: block;-->
				<!--width: $btn-size * 0.66;-->
				<!--height: $btn-size/2;-->
				<!--right: 0;-->
				<!--cursor: pointer;-->

				<!--&:after {-->
					<!--position: relative;-->
					<!--margin: 3px auto 0 auto;-->
					<!--display: block;-->
					<!--content: '';-->
					<!--width: 10px;-->
					<!--height: 10px;-->
					<!--border: 8px solid transparent;-->
					<!--border-top: 0px solid transparent;-->
					<!--border-bottom: 10px solid $btn-color;-->
					<!--transition: ease all 0.2s;-->
				<!--}-->

				<!--&:hover {-->
					<!--&:after {-->
						<!--border-top-color: #9d9d9d;-->
						<!--border-bottom-color: #9d9d9d;-->
					<!--}-->
				<!--}-->

				<!--&.disable {-->
					<!--cursor: not-allowed;-->
					<!--&:after {-->
						<!--border-top-color: #E1E1E1;-->
						<!--border-bottom-color: #E1E1E1;-->
					<!--}-->
				<!--}-->
			<!--}-->
			<!--.add {-->
				<!--top: 0;-->

				<!--&:after {-->
					<!--border: 6px solid transparent;-->
					<!--border-top: 0px solid transparent;-->
					<!--border-bottom: 10px solid $btn-color;-->
				<!--}-->
			<!--}-->
			<!--.sub {-->
				<!--bottom: 0;-->

				<!--&:after {-->
					<!--border: 6px solid transparent;-->
					<!--border-bottom: 0px solid transparent;-->
					<!--border-top: 10px solid $btn-color;-->
				<!--}-->
			<!--}-->

			<!--.val {-->
				<!--display: block;-->
				<!--width: 100%;-->
				<!--height: 100%;-->
				<!--padding: 0 15px;-->
				<!--font-size: 14px;-->
				<!--color: transparent;-->
				<!--outline: none;-->
			<!--}-->
			<!--input {-->
				<!--position: absolute;-->
				<!--top: 0;-->
				<!--left: 0;-->
				<!--display: block;-->
				<!--width: 100%;-->
				<!--height: 100%;-->
				<!--padding: 0 15px;-->
				<!--border: none;-->
				<!--outline: none;-->
				<!--font-size: 14px;-->
				<!--/*color: transparent;*/-->
				<!--background: transparent;-->
			<!--}-->
		<!--}-->
	<!--}-->

<!--</style>-->
