<template lang="docs">
	# 日期与时间选择

	## 日期选择

	:::html
		<InputDate
			v-model="value"
			format="x"
			placeholder="DatePicker"
		></InputDate>
	:::

	value: {{value}}

	:::html
		<InputDate
			v-model="date"
			format="YYYY-MM-DD"
		></InputDate>
	:::

	date: {{date}}

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|size|输入框的大小|String|`'md'`|
	|readonly|只读|Boolean|`false`|
	|disabled|禁用|Boolean|`false`|
	|format|格式|String|`'YYYY-MM-DD'`|
	|placeholder|占位符|String||

	## 时间选择

	:::html
		<InputTime
			v-model="time"
		></InputTime>
	:::

	time: {{time}}

	:::html
		<InputTime
			v-model="time2"
			format="HH:mm"
		></InputTime>
	:::

	time2: {{time2}}

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|size|输入框的大小|String|`'md'`|
	|readonly|只读|Boolean|`false`|
	|disabled|禁用|Boolean|`false`|
	|format|格式|String|`'HH:mm:ss'`|
	|placeholder|占位符|String||

	## 日期时间选择

	:::html
		<InputDateTime
			v-model="datetime"
			format="YYYY/MM/DD HH:mm"
		></InputDateTime>
	:::

	datetime: {{datetime}}


	:::html
		<InputDateTime
			v-model="datetime2"
			format="'YYYY/MM/DD HH:mm:ss"
		></InputDateTime>
	:::

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|size|输入框的大小|String|`'md'`|
	|readonly|只读|Boolean|`false`|
	|disabled|禁用|Boolean|`false`|
	|start-format|开始时间格式|String|`'YYYY/MM/DD HH:mm:ss'`|
	|end-format|结束时间格式|String|`'YYYY/MM/DD HH:mm:ss'`|
	|placeholder|占位符|String|`''`|


	## 日期区间选择

	:::html
		<InputDateRange
			v-model="dateRange"
			start-format="YYYY/MM/DD HH:mm"
			end-format="YYYY/MM/DD HH:mm"
		></InputDateRange>
	:::

	datetime: {{dateRange}}

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|size|输入框的大小|String|`'md'`|
	|readonly|只读|Boolean|`false`|
	|disabled|禁用|Boolean|`false`|
	|format|格式|String|`'YYYY/MM/DD HH:mm:ss'`|
	|placeholder|占位符|String|`''`|

	注：format 格式参见 [moment format](https://momentjs.com/docs/#/parsing/string-format/)
</template>

<script>
	export default {
		data () {
			return {
				value: '',
				date: '2018-12-12',
				time: '12:13:14',
				time2: '',
				datetime: '',
				datetime2: '2018/12/12 12:13:14',
				dateRange: ['2018-12-12', '2018-12-22']
			}
		}
	}
</script>

<style scoped>
	.o-Input {
		max-width: 300px;
	}
</style>
