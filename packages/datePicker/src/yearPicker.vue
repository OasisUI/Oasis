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
		name: 'YearPicker',
		props,
		data () {
			return {
				years: [],
				listLength: 20,
				currentPage: 0
			}
		},
		beforeDestroy () {
			this.$parent.$off('updatePage', this.updatePage)
		},
		mounted () {
			this.$parent.$on('updatePage', this.updatePage)
			this.updateList()
		},
		methods: {
			pickYear (year) {
				this.date.year = year.year
				this.$emit('input', this.date.time)
				this.$parent.$emit('updateCurrentPage')
			},
			updateList (year) {
				const { listLength } = this
				year = year || this.date.year
				this.years = new Array(listLength).fill(null).map((item, index) => {
					return new D(year + index - listLength / 2)
				})
			},
			updatePage (n) {
				this.currentPage += n
			}
		},
		computed: {
			date () {
				return dateWrapper(this.value)
			}
		},
		watch: {
			currentPage: {
				handler (val) {
					this.updateList(this.date.year + val * this.listLength)
				}
			},
		}
	}
</script>
