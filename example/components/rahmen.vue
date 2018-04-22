<template lang="docs">

	# Rahmen 相框

	## 基本使用

	:::html
		<Rahmen
			src="https://camo.githubusercontent.com/87882cd6c816edb053cfb6e3c7f0d8ab0af4aae3/68747470733a2f2f63646e2e7261776769742e636f6d2f6a6f653232332f4f617369732f6465762f69636f6e2f69636f6e2e7376673f73616e6974697a653d74727565"
			type="fill"
			ratio="0.5"
		></Rahmen>
	:::

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|src| 图片地址|`String`| `100%`|
	|width| 图片宽度，example: `100`, `100%`, '100px', '100rem'| `String / Number` | `100%`|
	|height| 图片高度，example: `100`, `100%`, '100px', '100rem'| `String / Number` | equal width|
	|ratio| 图片高宽比 | `Number` | `1` |
	|type| 图片显示方式 | `String` | `fill` |

	### type

	|缩放类型 | 值 | 说明 |
	|---|---|---|
	|缩放	 | fill		| 图片宽高均为 100% |
	|缩放	 | fillMax	| 保持纵横比缩放图片，使图片的最长边能完全显示出来 |
	|缩放	 | fillMin	| 保持纵横比缩放图片，图片的最短边能完全显示出来，图片可能因此被截取 |

</template>

<script>
	export default {}
</script>

<style scoped>

</style>
