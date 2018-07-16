<template lang="docs">
	# Checkbox 复选框

	## 基本使用

	`value` 值类型为 `Boolean`。`value1: {{value1}}`
	:::html
		<Checkbox
			v-model="value1"
		>A</Checkbox>
	:::

	## 禁用

	`Checkbox` 无法被选中，也不会被表单提交。

	:::html
		<Checkbox
			v-model="value1"
			disabled
		>A</Checkbox>
	:::

	## 复选框组

	当在 `CheckboxGroup` 上绑定时，`value` 是一个数组。`value2: {{value2}}`。

	:::html
		<CheckboxGroup
			v-model="value2"
		>
			<Checkbox label="A">A</Checkbox>
			<Checkbox label="B">B</Checkbox>
			<Checkbox label="C">C</Checkbox>
		</CheckboxGroup>
	:::

	### 禁用整个复选框组

	:::html
		<CheckboxGroup
			v-model="value2"
			disabled
		>
			<Checkbox label="A">A</Checkbox>
			<Checkbox label="B">B</Checkbox>
			<Checkbox label="C">C</Checkbox>
		</CheckboxGroup>
	:::

</template>

<script>
	export default {
		data () {
			return {
				value1: false,
				value2: []
			}
		}
	}
</script>

<style>
	.o-Input {
		max-width: 300px;
	}
</style>
