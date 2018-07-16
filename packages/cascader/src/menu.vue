<template>
	<ul class="o-CascaderMenu">
		<li
			v-for="(option, $index) in options"
			:key="$index"
			@click.stop="onSelect(option)"
			class="o-CascaderMenu__item"
			:class="{
				'is-selected':  value[index] !== void(0) ? value[index] === option.value : false
			}"
		>
			<span class="o-CascaderMenu__label">{{option.label}}</span>
			<i
				v-if="option.children && option.children.length"
				class="o-CascaderMenu__trigger iconfont icon-line-arrow-right"
			></i>
		</li>
	</ul>
</template>

<script>
	import {
		getParentComponent
	} from '../../../utils'

	const props = {
		value: {
			type: Array,
			default () {
				return []
			}
		},
		options: {
			type: Array,
			required: true
		},
		index: {
			type: Number,
			required: true
		}
	}

	export default {
		name: 'CascaderMenu',
		props,

		methods: {
			onSelect (option) {
				const $cascader = getParentComponent(this, 'Cascader')
				if ($cascader) {
					$cascader.$emit('select', { option, index: this.index })
				}
			}
		}
	}
</script>
