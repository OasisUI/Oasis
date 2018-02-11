<template>
	<div class="o-DatePicker">
		<div
			class="o-DatePicker__days"
		>
			<div
				v-for="weekDay in weekDays"
				class="o-DatePicker__weekDay"
			>{{weekDay}}</div>
			<div
				@click="pickDate(day)"
				v-for="day in days"
				class="o-DatePicker__day"
				:class="{
					'is-selected': day.date === date.date,
					'is-disabled': !day._
				}"
			>{{day.date || ''}}</div>
		</div>
	</div>
</template>

<script>
	import {
		dateWrapper,
		getDaysOfMonth,
		getWeekDays
	} from "../../../utils/date";

	const props = {
		value: {
			validator (val) {
				return !isNaN(val)
			}
		}
	}

	export default {
		name: 'DatePicker',
		props,
		data () {
			return {
				weekDays: getWeekDays()
			}
		},
		methods: {
			pickDate (day) {
				this.$emit('input', day._.getTime())
			}
		},
		computed: {
			date () {
				return dateWrapper(parseInt(this.value))
			},
			days () {
				const { date } = this
				return getDaysOfMonth(date.year, date.month)
			}
		}
	}
</script>
