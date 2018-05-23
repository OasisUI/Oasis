<template lang="docs">
	# Input 文本输入框

	## 基本用法

	最常用的使用方式。

	:::html
		<Input
			placeholder="placeholder"
			v-model="inputText"
			type="password"
		/>
	:::

	## 插件

	可在 `Input` 前后添加额外的控件。必须声明 `slot` 为 `addonBefore` 或者 `addonAfter`。

	<!-- <Input
		v-model="inputText"
		:options="inputTextOptions"
	>
		<InputSelect
			v-model="inputText"
			slot="addonBefore"
			:options="inputTextOptions"
		/>
		<Button slot="addonAfter">Go!</Button>
	</Input> -->

	:::html
		<Input
			v-model="inputText"
			@change="onChange"
			:options="inputTextOptions"
		>
			<i slot="addonBefore" class="iconfont icon-link" style="color: #888;"></i>
			<Button slot="addonAfter">Go!</Button>
		</Input>
	:::

	## 设置 `Input` 组件大小

	:::html
		<div>
			<Input
				v-model="inputText"
				size="lg"
				placeholder="大"
			></Input>
			<Input
				v-model="inputText"
				size="md"
				placeholder="中"
			></Input>
			<Input
				v-model="inputText"
				size="sm"
				placeholder="小"
			></Input>
		</div>
	:::

	## 只读

	`Input` 元素不可输入，但仍然能获取焦点。

	:::html
		<Input
			v-model="inputText"
			readonly
		></Input>
	:::

	## 禁用

	`Input` 控件不可使用。也不会被 `form` 表单提交。

	:::html
		<Input
			v-model="inputText"
			disabled
		></Input>
	:::

	## 候选项

	通过 `options` 参数提供输入候选项。交互与 `InputSelect` 相同。

	:::html
		<Input
			v-model="inputText"
			:options="inputTextOptions"
		></Input>
	:::

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|size|输入框的大小|String|`'md'`|
	|options|提供给用户的候选项|String|`undefined`|
	|readonly|只读|Boolean|`false`|
	|disabled|禁用|Boolean|`false`|
</template>

<script>
	export default {
		data () {
			return {
				inputText: '',
				inputTextOptions: ['Alice', 'Bob', 'Eve']
			}
		},

		methods: {
			onChange (e) {
				console.log(e)
			}
		}
	}
</script>

<style scoped>
	.o-Input {
		max-width: 300px;
	}

	.o-Input:not(:last-of-type) {
		margin-bottom: 1rem;
	}
</style>
