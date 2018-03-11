<template lang="docs">
	# 日期与时间选择

	## 日期选择

	:::html
		<InputDate
			v-model="date"
		></InputDate>
	:::

	## 时间选择

	:::html
		<InputTime
			v-model="time"
		></InputTime>
	:::
</template>

<script>
	export default {
		data () {
			return {
				date: + new Date(),
				time: '12:00'
			}
		}
	}
</script>
