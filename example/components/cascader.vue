<template lang="docs">
	# Cascader 级联选择

	## 基本使用

	:::html
		<Cascader
			v-model="value"
			:options="options"
			@input="onInput"
			@change="onChange"
			class="demo"
		></Cascader>
	:::

	```javascript
		export default {
			data () {
				return {
					value: [1, 12],
					options: [
						{
							label: 'Beijing',
							value: 1,
							children: [
								{
									label: 'Shijingshan',
									value: 11
								},
								{
									label: 'Fengtai',
									value: 12
								},
							]
						},
						{
							label: 'Shanghai',
							value: 2,
							children: [
								{
									label: 'Yangpu',
									value: 21
								},
								{
									label: 'Xujiahui',
									value: 22
								},
							]
						},
						{
							label: 'Shenzhen',
							value: 3
						}
					]
				}
			},
			methods: {
				onInput (value) {
					console.log('input:', value)
				},

				onChange (value) {
					console.log('change:', value)
				}
			}
		}
	```
</template>

<script>
	export default {
		data () {
			return {
				value: [1, 12],
				options: [
					{
						label: 'Beijing',
						value: 1,
						children: [
							{
								label: 'Shijingshan',
								value: 11
							},
							{
								label: 'Fengtai',
								value: 12
							},
						]
					},
					{
						label: 'Shanghai',
						value: 2,
						children: [
							{
								label: 'Yangpu',
								value: 21
							},
							{
								label: 'Xujiahui',
								value: 22
							},
						]
					},
					{
						label: 'Shenzhen',
						value: 3
					}
				]
			}
		},
		methods: {
			onInput (value) {
				console.log('input:', value)
			},

			onChange (value) {
				console.log('change:', value)
			}
		}
	}
</script>

<style scoped>
	.demo {
		width: 300px;
	}
</style>

