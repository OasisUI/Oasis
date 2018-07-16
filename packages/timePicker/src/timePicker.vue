<template>
	<div class="o-TimePicker">
		<div
			class="o-TimePicker__currentValue"
		>
			<TimeSpinner
				:list="24"
				v-model="hour"
			></TimeSpinner>
		</div>
		<div
			class="o-TimePicker__currentValue"
		>
			<TimeSpinner
				:list="60"
				v-model="minute"
			></TimeSpinner>
		</div>
		<div
			class="o-TimePicker__currentValue"
		>
			<TimeSpinner
				:list="60"
				v-model="second"
			></TimeSpinner>
		</div>
	</div>
</template>
<script>
	import {
		formatNumber
	} from '../../../utils'
	import Spinner from './spinner'

	const props = {
		value: {},
		split: {
			type: String,
			default: ':'
		}
	}

	export default {
		name: 'TimePicker',
		props,
		data () {
			return {
				hour: 10,
				minute: 20,
				second: 30
			}
		},
		components: {
			[Spinner.name]: Spinner
		},
		methods: {
			updateValue () {
				const { split } = this
				const value = `${formatNumber(this.hour, 2)}${split}${formatNumber(this.minute, 2)}${split}${formatNumber(this.second, 2)}`
				this.$emit('input', value)
			}
		},
		watch: {
			value: {
				handler (val) {
					const [hour, minute, second] = val.split(':')
					this.hour = parseInt(hour) || 0
					this.minute = parseInt(minute) || 0
					this.second = parseInt(second) || 0
				},
				immediate: true
			},
			hour: {
				handler (val) {
					this.updateValue()
				}
			},
			minute: {
				handler (val) {
					this.updateValue()
				}
			},
			second: {
				handler (val) {
					this.updateValue()
				}
			}
		}
	}
</script>
