<template lang="docs">
	# Select 选择器

	## 基本用法

	如果 `options` 中 `item` 为基本数据类型 `Number`、`String` 则默认 `key === value`。

	:::html
		<Select
			v-model="value"
			@input="onInput"
			@change="onChange"
			@select="onSelect"
			:options="['Alice', 'Bob', 'Dylan']"
		></Select>
	:::

	但是你也可以这样写（当 `value` 是 `Object` 时必须如此）：

	```JavaScript
		options = [
			{
				key: 'key',
				value: {}
			}
		]
	```

	例如：

	<span>value: {{value}}</span>

	:::html
		<Select
			v-model="value"
			:options="[
				{
					key: '货车',
					value: 1
				},
				{
					key: '宠物',
					value: 2
				}
			]"
		></Select>
	:::

</template>

<script>
	export default {
		data () {
			return {
				value: 1,
			}
		},

		methods: {
			onInput (e) {
				console.log(e)
			},

			onChange (e) {
				console.log(e)
			},

			onSelect (e) {
				console.log(e)
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
