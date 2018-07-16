<template lang="docs">
	# Radio 单选

	## 基本用法

	`Radio` 被选中后，会将 `label` 作为 `value` 的值。

	<p>
		value: {{value}}
	</p>
	:::html
		<div>
			<Radio
				:label="{key: 'A'}"
				v-model="value"
			>A</Radio>
			<Radio
				label="B"
				v-model="value"
			>B</Radio>
			<Radio
				label="C"
				v-model="value"
			>C</Radio>
		</div>
	:::

	## 禁用状态

	### 禁用单个 `Radio`

	:::html
		<div>
			<Radio
				label="B"
				v-model="value"
				disabled
			>B</Radio>
			<Radio
				label="C"
				v-model="value"
				disabled
			>C</Radio>
		</div>
	:::

	### 禁用整个单选框组

	:::html
		<RadioGroup
			v-model="value2"
			disabled
		>
			<Radio label="GroupItem1">1</Radio>
			<Radio label="GroupItem2">2</Radio>
			<Radio label="GroupItem3">3</Radio>
		</RadioGroup>
	:::

	## 单选框组

	:::html
		<RadioGroup
			v-model="value2"
		>
			<Radio label="GroupItem1">1</Radio>
			<Radio label="GroupItem2">2</Radio>
			<Radio label="GroupItem3">3</Radio>
		</RadioGroup>
	:::

	### 按钮样式的单选框组

	:::html
		<RadioGroup
			v-model="value2"
		>
			<RadioBtn label="GroupItem1">GroupItem1</RadioBtn>
			<RadioBtn label="GroupItem2">GroupItem2</RadioBtn>
			<RadioBtn label="GroupItem3">GroupItem3</RadioBtn>
		</RadioGroup>
	:::

	### 单选框组的大小

	`size` 提供 3 种选项，`lg` `md` 和 `sm`，`default: md`。

	:::html
		<RadioGroup
			v-model="value2"
			size="lg"
		>
			<RadioBtn label="GroupItem1">GroupItem1</RadioBtn>
			<RadioBtn label="GroupItem2">GroupItem2</RadioBtn>
			<RadioBtn label="GroupItem3">GroupItem3</RadioBtn>
		</RadioGroup>
		<RadioGroup
			v-model="value2"
			size="md"
		>
			<RadioBtn label="GroupItem1">GroupItem1</RadioBtn>
			<RadioBtn label="GroupItem2">GroupItem2</RadioBtn>
			<RadioBtn label="GroupItem3">GroupItem3</RadioBtn>
		</RadioGroup>
		<RadioGroup
			v-model="value2"
			size="sm"
		>
			<RadioBtn label="GroupItem1">GroupItem1</RadioBtn>
			<RadioBtn label="GroupItem2">GroupItem2</RadioBtn>
			<RadioBtn label="GroupItem3">GroupItem3</RadioBtn>
		</RadioGroup>
	:::

</template>

<script>
	export default {
		data () {
			return {
				value: 'B',
				value2: 'GroupItem2'
			}
		}
	}
</script>

<style>
	.o-Input {
		max-width: 300px;
	}
</style>
