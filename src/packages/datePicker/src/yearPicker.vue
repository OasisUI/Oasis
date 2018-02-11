<template>
	<div class="o-YearPicker">
		<div
			v-for="year in years"
			@click="pickYear(year)"
			class="o-YearPicker__year"
			:class="{
				'is-selected': year.year === date.year
			}"
		>
			<span>{{year.year}}</span>
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
		name: 'YearPicker',
		props,
		data () {
			return {
				years: [],
				listLength: 20
			}
		},
		mounted () {
			this.updataList()
		},
		methods: {
			pickYear (year) {
				const { date } = this
				this.$emit('input', new D(year.year, date.month, date.day, date.hours, date.minutes, date.seconds))
			},
			updataList (year) {
				const { listLength } = this
				year = year || this.date.year
				this.years = new Array(listLength).fill(null).map((item, index) => {
					return new D(this.date.year + index - listLength / 2)
				})
			}
		},
		computed: {
			date () {
				return dateWrapper(this.value)
			}
		}
	}
</script>
