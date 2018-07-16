<template lang="docs">
	# InputNumber 数字输入框

	## 基本用法

	:::html
		<InputNumber
			v-model="value1"
		></InputNumber>
	:::

	## 最大/最小值

	`max` 和 `min` 类型为 `Number`, value2: {{value2}}

	:::h
		<InputNumber
			v-model="value2"
			:max="102"
			:min="99"
		></InputNumber>
	:::

	## 后缀

	### 显示后缀

	仅在输入框中显示后缀，并不会改变值。

	:::html
		<div>
			<p>value1: {{value1}}</p>
			<InputNumber
				v-model="value1"
				suffix="px"
			></InputNumber>
		</div>
	:::

	### 添加后缀

	`InputNumber` 数值改变时，后缀会添加到数值后。`value3`: {{value3}}

	:::html
		<InputNumber
			v-model="value3"
			suffix="px"
			appendsuffix
		></InputNumber>
	:::

	## 步长

	`InputNumber` 中的按钮被点击时，数值增减的步长。

	:::html
		<InputNumber
			v-model="value3"
			:step="10"
		></InputNumber>
	:::

	:::html
		<InputNumber
			v-model="value4"
			:step="0.1"
		></InputNumber>
	:::

</template>

<script>
	export default {
		data () {
			return {
				value1: 0,
				value2: 100,
				value3: 100,
				value4: 1
			}
		}
	}
</script>

<style scoped>
	.o-Input {
		max-width: 200px;
	}

	.o-Input:not(:last-of-type) {
		margin-bottom: 1rem;
	}
</style>

