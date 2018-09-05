<template lang="docs">
	# 日期与时间选择

	## 日期选择

	:::html
		<InputDate
			v-model="value"
		></InputDate>
	:::

	:::html
		<InputDate
			v-model="date"
		></InputDate>
	:::

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|size|输入框的大小|String|`'md'`|
	|readonly|只读|Boolean|`false`|
	|disabled|禁用|Boolean|`false`|
	|format|格式|String|`YYYY-MM-DD`|

	## 时间选择

	:::html
		<InputTime
			v-model="time"
		></InputTime>
	:::

	:::html
		<InputTime
			v-model="time"
			format="HH:mm"
		></InputTime>
	:::

	## 日期时间选择

	:::html
		<InputDateTime
			v-model="datetime"
		></InputDateTime>
	:::

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|size|输入框的大小|String|`'md'`|
	|readonly|只读|Boolean|`false`|
	|disabled|禁用|Boolean|`false`|
	|format|格式|String|`HH:mm:ss`|
</template>

<script>
	export default {
		data () {
			return {
				value: '',
				date: '2018/05/14',
				time: '12:00',
				datetime: '2018/05/14 12:00'
			}
		}
	}
</script>

<style scoped>
	.o-Input {
		max-width: 300px;
	}
</style>
