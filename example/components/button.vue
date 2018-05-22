<template lang="docs">
	# 按钮与按钮组

	## 按钮类型

	:::html
		<div>
			<Button type="primary" size="lg" round>primary</Button>
			<Button type="danger" size="lg" round>danger</Button>
			<Button type="warning" size="lg" round>warning</Button>
			<Button type="default" size="lg" round>default</Button>
		</div>
	:::

	我们建议你使用语义化的类型，例如：点击按钮后执行的操作是危险的，那么设置`type="danger"`。

	## 按钮状态

	### 加载

	正在响应用户的点击操作，或者数据正在加载中。

	:::html
		<div>
			<Button type="primary" round :loading="loading">Button</Button>
			<Button type="danger" round :loading="loading">Button</Button>
			<Button type="warning" round loading>Button</Button>
			<Button type="default" round loading>Button</Button>
		</div>
	:::

	### 禁用

	按钮进入不可点击状态，无法触发 `click` 事件。

	:::html
		<div>
			<Button @click="onClick" type="primary" :disabled="!disabled" round>{{!disabled ? 'disabled' : 'usable'}}</Button>
			<Button @click="onClick" :disabled="disabled" round>{{disabled ? 'disabled' : 'usable'}}</Button>
			<Button @click="onClick" round>click me!</Button>
		</div>
	:::

	## 按钮的特殊样式

	### 圆角边

	使用圆角按钮。

	:::html
		<div>
			<Button type="primary" round>Round</Button>
			<Button type="danger">{{text}}</Button>
		</div>
	:::

	### 块级按钮

	设置按钮 `display` 属性值为 `block`。

	:::html
		<div>
			<Button type="primary" round block>Round</Button>
			<Button type="danger" block>{{text}}</Button>
		</div>
	:::

	### 渐变背景

	使用渐变背景。只在 `type="primary"` 时有效。

	:::html
		<Button type="primary" gradient round>{{text}}</Button>
	:::

	### 幽灵按钮

	背景透明的幽灵按钮。

	:::html
		<div>
			<Button type="primary" ghost>{{text}}</Button>
			<Button type="danger" ghost>{{text}}</Button>
			<Button type="warning" ghost>{{text}}</Button>
			<Button type="default" ghost>{{text}}</Button>
		</div>
	:::

	## 按钮组

	`ButtonGroup` 与 `Button` 具有一致的属性，而且具有更高的优先级。

	:::html
		<ButtonGroup type="primary" round>
			<Button>A</Button>
			<Button>B</Button>
			<Button>C</Button>
			<Button>D</Button>
		</ButtonGroup>
		<br/>
		<ButtonGroup size="lg" type="danger">
			<Button>A</Button>
			<Button>B</Button>
			<Button>C</Button>
			<Button>D</Button>
		</ButtonGroup>
	:::
</template>

<script>
	export default {
		data () {
			return {
				disabled: true,
				loading: true,
				text: 'Button'
			}
		},
		methods: {
			onClick (e) {
				this.disabled = !this.disabled
				this.loading = !this.loading
			}
		}
	}
</script>
