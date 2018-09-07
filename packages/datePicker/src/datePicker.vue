<template>
	<div class="o-DatePicker">
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
			v-if="status === 'year'"
			v-model="currentPage"
		></YearPicker>
		<MonthPicker
			v-if="status === 'month'"
			v-model="currentPage"
		></MonthPicker>
		<DayPicker
			v-if="status === 'day'"
			v-model="date"
			:current-page="currentPage"
			:min="min"
			:max="max"
			:start="start"
			:end="end"
		></DayPicker>
	</div>
</template>

<script>
	import {
		dateWrapper
	} from 'utils/date'
	import DayPicker from './dayPicker'
	import YearPicker from './yearPicker'
	import MonthPicker from './monthPicker'

	const props = {
		value: Number,

		// Optional range
		min: Number,
		max: Number,

		// Selected range
		start: Number,
		end: Number,
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
			this.currentPage = dateWrapper([currentPage.year, currentPage.month - 1]).time
		},

		methods: {
			dateWrapper: dateWrapper
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

		components: {
			[YearPicker.name]: YearPicker,
			[MonthPicker.name]: MonthPicker,
			[DayPicker.name]: DayPicker
		}
	}
</script>
