<template>
	<div class="o-Input o-InputText"
 		:class="[
 			disabled ? 'is-disabled' : '',
 			readonly ? 'is-readonly' : '',
			'o-Input--' + size
		]"
	>
		<div class="o-Input__wrapper">
			<input
				v-model="currentVal"
				:disabled="disabled"
				:readonly="readonly"
				:placeholder="placeholder"
				type="text"
			/>
			<span
				v-if="options && !disabled && !readonly"
				@click="displayList"
				class="o-Input__openList"
			>
				<i class="iconfont icon-arrow-down"></i>
			</span>
		</div>
		<ul
			v-show="showList"
			@click="setVal"
			class="o-Input__options"
			ref="list"
		>
			<li v-for="val in options">{{ val }}</li>
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
		},
		readonly: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'md'
		},
		placeholder: String
	}

	export default {
		name: 'InputText',
		props,
		data () {
			return {
				currentVal: this.value || '',
				showList: false,
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
				if (e.target !== list && !list.contains(e.target) && !this.$el.contains(e.target)) {
					this.showList = false
				}
			},
			setVal (e) {
				const list = this.$refs.list.children
				const index = Array.prototype.indexOf.call(list, e.target)
				this.$emit('input', this.options[index])
				this.showList = false
			}
		}
	}
</script>
