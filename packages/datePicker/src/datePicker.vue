<template>
	<div class="o-DatePicker">
		<!--<p>{{`${dateWrapper(date).year}/${dateWrapper(date).month}/${dateWrapper(date).day}`}}</p>-->
		<div class="o-DatePicker__actions">
			<button
				type="button"
				class="o-DatePicker__prevBtn"
				@click.stop="$emit('updatePage', -1)"
			>
				<i class="iconfont icon-arrow-left"></i>
			</button>
			<div class="o-DatePicker__statusGroup">
				<button
					type="button"
					:class="{
					'is-currentEdit': status === 'year'
				}"
					@click.stop="status = 'year'"
				>{{dateWrapper(currentPage).year}}年</button>
				<button
					type="button"
					:class="{
					'is-currentEdit': status === 'month'
				}"
					@click.stop="status = 'month'"
				>{{dateWrapper(currentPage).month}}月</button>
			</div>
			<button
				type="button"
				class="o-DatePicker__nextBtn"
				@click.stop="$emit('updatePage', 1)"
			>
				<i class="iconfont icon-arrow-right"></i>
			</button>
		</div>
		<YearPicker
			v-model="currentPage"
			v-if="status === 'year'"
		></YearPicker>
		<MonthPicker
			v-model="currentPage"
			v-if="status === 'month'"
		></MonthPicker>
		<DayPicker
			v-model="date"
			:current-page="currentPage"
			v-if="status === 'day'"
		></DayPicker>
	</div>
</template>

<script>
	import YearPicker from './yearPicker'
	import MonthPicker from './monthPicker'
	import DayPicker from './dayPicker'
	import {
		D,
		dateWrapper
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
				status: 'day',
				currentPage: 0
			}
		},
		beforeDestroy () {
			this.$off('updateCurrentPage')
		},
		mounted () {
			this.$on('updateCurrentPage', val => {
				if (val) {
					this.currentPage = val.time
				}
				this.status = 'day'
			})
			const currentPage = dateWrapper(this.value)
			this.currentPage = new D(currentPage.year, currentPage.month).time
		},
		methods: {
			dateWrapper: dateWrapper,
			setTime () {
				this.$emit('input', this.currentPage)
			}
		},
		computed: {
			date: {
				set (val) {
					this.$emit('input', val.time)
				},
				get () {
					return parseInt(this.value)
				}
			}
		},
		// watch: {
		// 	currentPage: {
		// 		handler (val) {
		// 			this.setTime()
		// 		}
		// 	}
		// },
		components: {
			[YearPicker.name]: YearPicker,
			[MonthPicker.name]: MonthPicker,
			[DayPicker.name]: DayPicker
		}
	}
</script>
