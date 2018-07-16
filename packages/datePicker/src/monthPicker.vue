<template>
	<div class="o-MonthPicker">
		<div
			v-for="month in months"
			@click="pickMonth(month)"
			class="o-MonthPicker__month"
			:class="{
				'is-selected': month.month === date.month &&
								month.year === date.year
			}"
		>
			<span>{{month.month}}</span>
		</div>
	</div>
</template>

<script>
	import {
		D,
		dateWrapper
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
				months: [],
				currentPage: 0
			}
		},
		beforeDestroy () {
			this.$parent.$off('nextPage', this.updatePage)
		},
		
		mounted () {
			this.$parent.$on('updatePage', this.updatePage)
			this.updateList()
		},
		methods: {
			pickMonth (month) {
				const { date } = this
				date.month = month.month
				if (date.month !== month.month) {
					date.month = month.month
				}
				this.$emit('input', this.date.time)
				this.$parent.$emit('updateCurrentPage')				
			},
			updateList (year) {
				year = year || this.date.year
				this.months = new Array(12).fill(null).map((item, index) => {
					return new D(year, index + 1)
				})
			},
			updatePage (n) {
				this.date.year += n
				this.$emit('input', this.date.time)
				this.updateList()
			}
		},
		computed: {
			date () {
				return dateWrapper(this.value)
			}
		}
	}
</script>
