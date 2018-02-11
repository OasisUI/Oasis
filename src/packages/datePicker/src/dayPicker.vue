<template>
	<div
		class="o-DayPicker"
	>
		<div
			v-for="weekDay in weekDays"
			class="o-DayPicker__weekDay"
		>{{weekDay}}</div>
		<div
			@click="pickDate(day)"
			v-for="day in days"
			class="o-DayPicker__day"
			:class="{
				'is-selected': day.day === date.day,
				'is-disabled': !day._
			}"
		>
			<span>{{day.day || ''}}</span>
		</div>
	</div>
</template>

<script>
	import {
		D,
		dateWrapper,
		getDaysOfMonth,
		getWeekDays
	} from "../../../utils/date"

	const props = {
		value: {
			validator (val) {
				return !isNaN(val)
			}
		}
	}

	export default {
		name: 'DayPicker',
		props,
		data () {
			return {
				weekDays: getWeekDays()
			}
		},
		methods: {
			pickDate (day) {
				const { date } = this
				this.$emit('input', new D(date.year, date.month, day.day, date.hours, date.minutes, date.seconds))
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
