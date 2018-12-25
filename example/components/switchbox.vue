<template lang="docs">
	# Switchbox 开关

	## 基本使用

	`value` 值类型为 `Boolean`。`value1: {{value1}}`
	:::html
		<Switchbox
			v-model="value1"
		>A</Switchbox>
	:::

	## 禁用

	`Switchbox` 无法被选中，也不会被表单提交。

	:::html
		<Switchbox
			v-model="value1"
			disabled
		>A</Switchbox>
	:::

	## Label

	`Switchbox` 无法被选中，也不会被表单提交。

	:::html
		<Switchbox
			v-model="value1"
			:label="['on', 'off']"
		>A</Switchbox>
	:::

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|disabled|禁用|Boolean|`false`|
	|label|开关状态标识|String[]|['', '']|

	## Event

	|事件名|说明|参数|
	|---|---|---|
	|input|用户输入时触发|新值|
	|change|value值改变时触发|新值|
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
