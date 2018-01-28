<template>
	<div class="form-input input-number" :class="{'disabled': disabled}">
		<div class="current-val">
			<span class="val">{{currentVal}}<span class="input-suffix">&nbsp;{{suffix}}</span></span>
			<input type="text" v-model="currentVal" @change="onChange" :disabled="disabled">
			<div v-show="!disabled">
				<span class="add" :class="{'disable': !isNaN(max) && currentVal >= max}" @click="add"></span>
				<span class="sub" :class="{'disable': !isNaN(min) && currentVal <= min}" @click="sub"></span>
			</div>
		</div>
	</div>
</template>

<script>
	const props = {
		value: {
			required: true
		},
		step: {
			type: Number,
			default () {
				return 1
			}
		},
		suffix: {
			type: String,
			default () {
				return ''
			}
		},
		max: {
			type: Number,
		},
		min: {
			type: Number,
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}

	export default {
		name: 'input-number',
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
				const { suffix, currentVal } = this
				this.$emit('input', suffix ? currentVal + suffix : currentVal)
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

<style lang="scss" scoped>

	$btn-size: 36px;
	$btn-color: #E1E1E1;
	.input-number {
		display: inline-block;
		width: 100%;
		border: 1px solid #E1E1E1;
		border-radius: 4px;

		&.disabled {
			background: #EEE;
			color: #989898;
			input {
				cursor: not-allowed;
			}
		}

		.input-suffix {
			color: #9d9d9d;
			/*display: inline-block;*/
			/*float: left;*/
		}

		.current-val {
			position: relative;
			height: 100%;
			padding-right: 38px;

			.add,
			.sub {
				position: absolute;
				display: block;
				width: $btn-size * 0.66;
				height: $btn-size/2;
				right: 0;
				cursor: pointer;

				&:after {
					position: relative;
					margin: 3px auto 0 auto;
					display: block;
					content: '';
					width: 10px;
					height: 10px;
					border: 8px solid transparent;
					border-top: 0px solid transparent;
					border-bottom: 10px solid $btn-color;
					transition: ease all 0.2s;
				}

				&:hover {
					&:after {
						border-top-color: #9d9d9d;
						border-bottom-color: #9d9d9d;
					}
				}

				&.disable {
					cursor: not-allowed;
					&:after {
						border-top-color: #E1E1E1;
						border-bottom-color: #E1E1E1;
					}
				}
			}
			.add {
				top: 0;

				&:after {
					border: 6px solid transparent;
					border-top: 0px solid transparent;
					border-bottom: 10px solid $btn-color;
				}
			}
			.sub {
				bottom: 0;

				&:after {
					border: 6px solid transparent;
					border-bottom: 0px solid transparent;
					border-top: 10px solid $btn-color;
				}
			}

			.val {
				display: block;
				width: 100%;
				height: 100%;
				padding: 0 15px;
				font-size: 14px;
				color: transparent;
				outline: none;
			}
			input {
				position: absolute;
				top: 0;
				left: 0;
				display: block;
				width: 100%;
				height: 100%;
				padding: 0 15px;
				border: none;
				outline: none;
				font-size: 14px;
				/*color: transparent;*/
				background: transparent;
			}
		}
	}

</style>
