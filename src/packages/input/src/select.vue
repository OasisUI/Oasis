<!--select 组件-->
<template>
	<div class="form-input input-select" :class="{'disabled': disabled}">
		<input v-model="currentVal" @click="displayList" type="text" :disabled="disabled">
		<span v-if="options" class="open-list"></span>
		<ul v-show="showList" @click="setVal" class="options" ref="list">
			<li v-for="(opt, index) in currentOpts">{{opt.key ? opt.key : opt}}</li>
		</ul>
	</div>
</template>

<script>
	const props = {
		value: {
			required: true
		},
		options: {
			type: Array
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}

	export default {
		name: 'input-select',
		props,
		data () {
			return {
				showList: false,
				currentVal: '',
			}
		},
		mounted () {
			document.addEventListener('click', this.hideList)
			this.initVal()
		},
		beforeDestroy () {
			document.removeEventListener('click', this.hideList)
		},
		methods: {
			setVal (e) {
				const list = this.$refs.list.children
				const index = Array.prototype.indexOf.call(list, e.target)
				const val = this.currentOpts[index] && this.currentOpts[index].val
				this.$emit('input', val)
				this.showList = false
			},
			hideList (e) {
				const list = this.$refs.list
				if (e.target !== list && !list.contains(e.target) && !this.$el.contains(e.target)) {
					this.showList = false
				}
			},
			displayList () {
				this.showList = true
			},
			initVal () {
				const v = this.currentOpts.find(item => item.val === this.value)
				this.currentVal = v ? v.key : '未选择'
			}
		},
		computed: {
			currentOpts () {
				const { options } = this
				if (typeof options[0] !== 'object') {
					return options.map((item, index) => {
						return {
							key: item,
							val: item
						}
					})
				} else {
					return options
				}
			}
		},
		watch: {
			currentVal (val) {
				// TODO
			},
			value () {
				this.initVal()
			}
		}
	}
</script>

<style lang="scss" scoped>

	$btn-size: 36px;
	$btn-color: #E1E1E1;

	.input-select {
		position: relative;
		display: inline-block;
		width: 100%;
		border: 1px solid #E1E1E1;
		border-radius: 4px;
		&:hover {
			.open-list:after {
				border-top-color: #9d9d9d;
			}
		}

		&.disabled {
			background: #EEE;
			color: #989898;
			input {
				cursor: not-allowed;
			}
		}

		input {
			z-index: 2;
			position: relative;
			display: block;
			width: 100%;
			height: 100%;
			padding: 0 15px;
			border: none;
			outline: none;
			font-size: 14px;
			padding-right: 36px;
			cursor: pointer;
			background: transparent;
		}

		.open-list {
			position: absolute;
			top: 0;
			height: 100%;
			right: 0;
			width: $btn-size;

			&:after {
				position: relative;
				margin: 14px auto 0 auto;
				display: block;
				content: '';
				width: 10px;
				height: 100%;
				border: 8px solid transparent;
				border-bottom: 0px solid transparent;
				border-top: 10px solid $btn-color;
				transition: ease all 0.2s;
			}
		}
		.options {
			position: absolute;
			z-index: 9;
			top: 40px;
			right: 0;
			padding: 0;
			min-height: 38px;
			max-height: 300px;
			width: 100%;
			overflow: auto;
			list-style: none;
			background: #fff;
			border-radius: 4px;
			box-shadow: 0 0 8px 4px rgba(0,0,0,0.14);

			li {
				line-height: 40px;
				padding: 2px 14px;
				transition: ease all 0.2s;
				cursor: pointer;
				&:hover {
					background: rgba(0,0,0,0.1);
				}
			}
		}
	}
</style>
