<template>
	<div class="o-Input o-Input"
 		:class="[
 			disabled ? 'is-disabled' : '',
 			readonly ? 'is-readonly' : '',
			'o-Input--' + size
		]"
		@mouseleave="onMouseleave"
		@mouseover="onMouseover"
	>
		<span
			v-if="options && !disabled && !readonly"
			@click="displayList"
			:style="style"
			class="o-Input__openList"
		>
			<i class="iconfont icon-arrow-down"></i>
		</span>
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
				@focus="onFocus"
				@blur="onBlur"
				@change="onChange"
				class="o-Input__native"
				:type="_type"
			/>
			<span
				v-if="$slots.addonAfter"
				ref="addonAfter"
				class="o-Input__addon"
			>
				<slot name="addonAfter"></slot>
			</span>
		</div>
		<slot
			v-if="$slots.options"
			name="options"
		></slot>
		<transition
			v-else
			name="o-InputOptions"
		>
			<ul
				v-show="showList"
				@click="setVal"
				class="o-Input__options"
				ref="list"
			>
				<li v-for="val in options">{{ val }}</li>
			</ul>
		</transition>
	</div>
</template>

<script>
	import { getDomSize } from 'utils'

	const props = {
		value: {},
		options: {
			type: Array
		},
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
		type: {
			type: String,
			default: 'text'
		},
		placeholder: String
	}

	export default {
		name: 'Input',
		props,
		data () {
			return {
				currentVal: this.value || '',
				showList: false,
				style: {
					display: 'none'
				}
			}
		},
		mounted () {
			document.addEventListener('click', this.hideList)
		},
		beforeDestroy () {
			document.removeEventListener('click', this.hideList)
		},
		watch: {
			currentVal (val) {
				this.$emit('input', val)
			},
			value (val) {
				this.currentVal = val
			}
		},
		methods: {
			displayList (e) {
				this.showList = !this.showList
			},
			hideList (e) {
				const list = this.$refs.list
				if (e.target !== list && list && !list.contains(e.target) && !this.$el.contains(e.target)) {
					this.showList = false
				}
			},
			setVal (e) {
				const list = this.$refs.list.children
				const index = Array.prototype.indexOf.call(list, e.target)
				this.$emit('input', this.options[index])
				this.$emit('change', this.options[index])
				this.showList = false
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
			onMouseover () {
				this.style = {
					right: `${getDomSize(this.$refs.addonAfter).x}px`,
					display: 'block'
				}
			},
			onMouseleave () {
				this.style.display = 'none'
			}
		},
		computed: {
			_type () {
				return ['text', 'password', 'textarea'].findIndex(type => type === this.type) > -1 ? this.type : 'text'
			}
		}
	}
</script>
