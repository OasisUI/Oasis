<template>
	<Input
		@focus="onFocus"
		v-model="value"
		class="o-DateTimePicker"
		:size="size"
		:readonly="readonly"
		:disabled="disabled"
	>
		<Modal
			v-model="showPicker"
			slot="options"
			:show-title="false"
		>
			<DatePicker
				v-if="step === 0"
				ref="picker"
				v-model="date"
			></DatePicker>
			<TimePicker
				v-else
				v-model="time"
				split=":"
			></TimePicker>
			<template slot="footer">
				<Button
					@click="showPicker = false"
					type="primary"
					ghost
				>
					取消
				</Button>
				<Button
					@click="setValue"
					type="primary"
				>
					确定
				</Button>
			</template>
		</Modal>
	</Input>
</template>

<script>
	import DatePicker from '@oasis-ui/datepicker/src/datePicker'
	import TimePicker from '@oasis-ui/timepicker/src/timePicker'
	import { getDomSize, formatNumber } from "utils"
	import { dateWrapper } from "utils/date"

	const props = {
		value: {
			type: String,
			default: ''
		},
		options: {
			type: Array
		},
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'md'
		},
		placeholder: String
	}

	export default {
		props,
		name: 'InputDateTime',
		data () {
			return {
				showPicker: false,
				date: '',
				time: '',
				step: 0
			}
		},
		methods: {
			onFocus () {
				this.step = 0
				this.showPicker = true
			},
			setValue () {
				this.step++
				let { date, time } = this
				date = dateWrapper(date)

				if (this.step >= 2) {
					const val = `${formatNumber(date.year, 4)}/${formatNumber(date.month, 2)}/${formatNumber(date.day, 2)} ${time}`
					this.$emit('input', val)
					this.showPicker = false
				}
			}
		},
		watch: {
			value: {
				handler (val) {
					const t = dateWrapper(val)
					this.date = t.unixTime
					this.time = `${formatNumber(t.hours, 2)}:${formatNumber(t.minutes, 2)}:${formatNumber(t.seconds, 2)}`
				},
				immediate: true
			}
		},
		components: {
			DatePicker,
			TimePicker
		},
	}
</script>
