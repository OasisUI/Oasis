<template>
	<div class="o-DatePicker">
		<div>
			<button
				@click.stop="status = 'year'"
			>年</button>
			<button
				@click.stop="status = 'month'"
			>月</button>
			<button
				@click.stop="status = 'day'"
			>日</button>
		</div>
		<YearPicker
			v-model="date"
			v-if="status === 'year'"
		></YearPicker>
		<MonthPicker
			v-model="date"
			v-if="status === 'month'"
		></MonthPicker>
		<DayPicker
			v-model="date"
			v-if="status === 'day'"
		></DayPicker>
	</div>
</template>

<script>
	import YearPicker from './yearPicker'
	import MonthPicker from './monthPicker'
	import DayPicker from './dayPicker'
	import {
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
				status: 'year'
			}
		},
		computed: {
			date: {
				set (val) {
					this.$emit('input', val.time)
				},
				get () {
					return this.value
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
