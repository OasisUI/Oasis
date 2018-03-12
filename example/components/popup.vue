<template lang="docs">
	# Popup 弹框

	## 基本使用

	可以通过 `content` 参数设置 `Popup` 内容。但是 `default slot` 的优先级更高。

	`v-popup` 必须为兄弟组件的 `ref` 值。

	:::html
		<Popup
			action="click"
			title="title"
			content="content"
			ref="popup"
		>
			<p>Hello World!</p>
		</Popup>
		<Button
			v-popup:popup
		>
			show Popup!
		</Button>
	:::

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|title|弹框标题|String|`''`|
	|content|弹框内容|String|`''`|
	|content|弹框内容|String|空字符|
	|v-popup|【required】 `popup` 引用名|String|`''`|
</template>

<script>
	export default {}
</script>
