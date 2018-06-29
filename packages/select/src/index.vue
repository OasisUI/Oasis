<!--select 组件-->
<template>
	<div
		@click="displayList"
		:class="[
			disabled ? 'is-disabled' : '',
			readonly ? 'is-readonly' : '',
			'o-Input--' + size
		]"
		class="o-Input o-InputSelect"
	>
		<input
			class="o-Input__native"
			v-model="currentVal"
			:disabled="disabled"
			@focus="onFocus"
			@blur="onBlur"
			@change="onChange"
			readonly="readonly"
			type="text"
		/>
		<span
			v-if="options"
			class="o-Input__openList"
		>
			<i class="iconfont icon-arrow-down"></i>
		</span>
		<transition name="o-InputOptions">
			<ul
				@click="setVal"
				v-show="showList"
				ref="list"
				class="o-Input__options"
			>
				<li
					v-for="opt in currentOpts"
					:key="opt.key"
					:class="{
						'is-selected': opt.selected
					}"
				>{{opt.key ? opt.key : opt}}</li>
			</ul>
		</transition>
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
		size: {
			type: String,
			default: 'md'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		disabled: Boolean,
		readonly: Boolean
	}

	export default {
		name: 'Select',
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
				const value = this.currentOpts[index] && this.currentOpts[index].value
				let changed = false
				if (value !== this.value) {
					changed = true
				}
				changed && this.$emit('input', value)
				this.$emit('select', value)
				changed && this.$emit('change', value)
				this.showList = false
			},
			hideList (e) {
				const list = this.$refs.list
				if (!this.$el.contains(e.target) && this.showList) {
					this.showList = false
				}
			},
			displayList (e) {
				if (!this.disabled && !this.readonly && !this.$refs.list.contains(e.target)) {
					this.showList = true
				}
			},
			initVal () {
				const v = this.currentOpts.find(item => item.value === this.value)
				this.currentVal = v ? v.key : '未选择'
			},
			onFocus (e) {
				this.$emit('focus', e)
			},
			onBlur (e) {
				this.$emit('blur', e)
			},
			onChange (e) {
				this.$emit('change', e)
			},
		},
		computed: {
			currentOpts () {
				const { options, value } = this
				if (typeof options[0] !== 'object') {
					return options.map((item, index) => {
						return {
							key: item,
							value: item,
							selected: item === value
						}
					})
				} else {
					return options.map(item => {
						item.selected = item.value === value
						return item
					})
				}
			}
		},
		watch: {
			value: {
				handler () {
					this.initVal()
				},
				immediate: true
			},
			options: {
				handler () {
					this.initVal()
				},
				immediate: true
			}
		}
	}
</script>

