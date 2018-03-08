<template lang="docs">
	# Input

	## 基本用法
	:::html
		<Input
			v-model="inputText"
		/>
	:::

	## Addon
	:::html
		<Input
			v-model="inputText"
		>
			<i slot="addonBefore" class="iconfont icon-link" style="color: #888;"></i>
			<Button slot="addonAfter">Go!</Button>
		</Input>
		<Input
			v-model="inputText"
			:options="inputTextOptions"
		>
			<i slot="addonBefore" class="iconfont icon-link" style="color: #888;"></i>
			<Button slot="addonAfter">Go!</Button>
		</Input>
	:::

	## 大小
	:::html
		<Input
			v-model="inputText"
			size="lg"
			placeholder="placeholder"
		>
		</Input>
		<Input
			v-model="inputText"
			size="md"
			placeholder="placeholder"
		>
		</Input>
		<Input
			v-model="inputText"
			size="sm"
			placeholder="placeholder"
		>
		</Input>
	:::

	## 只读、禁用
	:::html
		<Input
			v-model="inputText"
			size="lg"
			name="radio"
			:options="inputTextOptions"
			placeholder="placeholder"
			readonly
		>
		</Input>
		<Input
			v-model="inputText"
			size="lg"
			:options="inputTextOptions"
			placeholder="placeholder"
			disabled
		>
		</Input>
	:::

	## 具有候选项的 Input
	:::html
		<Input
			v-model="inputText"
			size="lg"
			:options="inputTextOptions"
			placeholder="placeholder"
		>
		</Input>
	:::
</template>

<script>
	export default {
		data () {
			return {
				inputText: 'hello ~',
				inputTextOptions: ['Alice', 'Bob', 'Eve'],
				inputNumber: 2,
				inputSelect: 2,
				inputSelectOptions: [
					{
						key: '二手',
						value: 1
					},
					{
						key: '家政',
						value: 2
					},
					{
						key: '维修',
						value: 3
					}
				],
				inputCheckbox: false,
				inputRadio: 'B',
				inputRadioGroup: 'GroupItem1',
				inputCheckboxGroup: []
			}
		}
	}
</script>

<style>
	.o-Input {
		max-width: 300px;
	}
</style>
