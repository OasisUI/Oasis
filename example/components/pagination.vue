<template lang="docs">

	# Pagination 分页

	## 基本使用

	<InputNumber v-model="currentPage"/>

	:::html
		<Pagination
			@current-change="onPageChange"
			:current-page="currentPage"
			:page-size="listing.limit"
			:total="listing.total"
			layout="prev, pager, next"
			:formatter="linkFormatter"
			target="_blank"
		></Pagination>
	:::


	```javascript
		export default {
			data () {
				return {
					currentPage: 1,
					listing: {
						limit: 10,
						total: 255
					}
				}
			},
			methods: {
				onPageChange (page) {
					this.currentPage = page
					console.log(page)
				},
				linkFormatter (page) {
					return `/baike/${page}`
				}
			}
		}
	```

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|currentPage|当前页码|Number|`1`|
	|pageSize|每页的数据条数|Number|`10`|
	|total|总数据条数|Number|`0`|
	|layout|分页组件布局方式 ~~暂不支持~~|String|`''`|
	|fomatter|链接格式化方法，用于 SSR|Function|`undefined`|
	|nativeLink|在渲染时是否使用原生链接 `<a>`|Boolean|`false`|
	|step|跨越式的跳转页码|Number|`10`|
	|prevStep|向前跨越按钮的文案|String|`«`|
	|nextStep|向后跨越按钮的文案|String|`»`|
	|prevText|向前一页跳转按钮的文案|String|`‹`|
	|nextText|向后一页跳转按钮的文案|String|`›`|
</template>

<script>
	export default {
		data () {
			return {
				currentPage: 1,
				listing: {
					limit: 20,
					total: 21
				}
			}
		},
		methods: {
			onPageChange (page) {
				this.currentPage = page
				console.log(page)
			},
			linkFormatter (page) {
				return `/baike/${page}`
			}
		}
	}
</script>

<style scoped>
	.o-Input {
		width: 100px;
	}
</style>
