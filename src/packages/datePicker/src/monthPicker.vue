<template>
	<div class="o-MonthPicker">
		<div
			v-for="month in months"
			@click="pickMonth(month)"
			class="o-MonthPicker__month"
			:class="{
				'is-selected': month.month === date.month
			}"
		>
			<span>{{month.month}}</span>
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
		name: 'MonthPicker',
		props,
		data () {
			return {
				months: []
			}
		},
		mounted () {
			this.months = new Array(12).fill(null).map((item, index) => {
				return new D(this.date.year, index + 1)
			})
		},
		methods: {
			pickMonth (month) {
				const { date } = this
				let newDate = new D(date.year, month.month, date.day,  date.hours, date.minutes, date.seconds)
				console.log(newDate.month, newDate.day)
				if (newDate.month !== month.month) {
					newDate = new D(newDate.year, month.month, 1,  newDate.hours, newDate.minutes, newDate.seconds)
				}
				this.$emit('input', newDate)
			}
		},
		computed: {
			date () {
				return dateWrapper(this.value)
			}
		}
	}
</script>
