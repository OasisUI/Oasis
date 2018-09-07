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
				'is-selected': 	day.date === date.date &&
								day.month === date.month &&
								day.year === date.year,
				'is-disabled':	day.month !== page.month ||
								Number.isInteger(min) && day.time < min ||
								Number.isInteger(max) && day.time > max,
				'is-inbounds':	(Number.isInteger(start) && Number.isInteger(end)) && day.isBetween(start, end, 'day', '[]')
			}"
			:data-date="`${day.year}${day.month}${day.date}`"
		>
			<span>
				<label>{{day.date || ''}}</label>
			</span>
		</div>
	</div>
</template>

<script>
	import {
		getWeekDays,
		dateWrapper,
		getDaysOfMonth,
	} from 'utils/date'

	const props = {
		value: {},
		currentPage: {},

		// Optional range
		min: Number,
		max: Number,

		// Selected range
		start: Number,
		end: Number,
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
				date.date = day.date
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
