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
				'is-selected': 	day.day === date.day &&
								day.month === date.month &&
								day.year === date.year,
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
		},
		currentPage: {
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
		beforeDestroy () {
			this.$parent.$off('updatePage', this.updatePage)
		},
		mounted () {
			this.$parent.$on('updatePage', this.updatePage)			
		},
		methods: {
			pickDate (day) {
				const { date } = this
				// this.$emit('input', new D(date.year, date.month, day.day, date.hours, date.minutes, date.seconds))
				date.day = day.day
				this.$emit('input', day)
			},
			updatePage (n) {
				this.page.month += n
				this.$parent.$emit('updateCurrentPage', this.page)
			}
		},
		computed: {
			date () {
				return dateWrapper(this.value)
			},
			page () {
				return dateWrapper(this.currentPage)
			},
			days () {
				const { page } = this
				return getDaysOfMonth(page.year, page.month)
			}
		}
	}
</script>
