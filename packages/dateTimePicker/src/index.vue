<template>
	<Input
		@focus="onFocus"
		v-model="value"
		class="o-DateTimePicker"
		:size="size"
		:readonly="readonly"
		:disabled="disabled"
		:placeholder="placeholder"
		html-readonly
	>
		<Modal
			v-model="showPicker"
			slot="suffix"
			:show-title="false"
		>
			<template>
				<DatePicker
					v-if="step === 0"
					ref="picker"
					:format="format"
					parse-format="x"
					v-model="time"
				></DatePicker>
				<TimePicker
					v-else
					:format="format"
					parse-format="x"
					v-model="time"
				></TimePicker>
			</template>
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
	import { dateWrapper } from 'utils/date'
	import DatePicker from '@oasis-ui/datepicker/src/datePicker'
	import TimePicker from '@oasis-ui/timepicker/src/timePicker'

	const props = {
		value: {},
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
		format: {
			type: String,
			default: 'YYYY/MM/DD HH:mm:ss'
		},
		placeholder: String
	}

	export default {
		props,

		name: 'InputDateTime',

		data () {
			return {
				showPicker: false,
				time: 0,
				step: 0
			}
		},

		methods: {
			onFocus () {
				this.step = 0
				this.showPicker = true
			},

			setValue () {
				const {
					time,
					format
				} = this
				const value = dateWrapper(time).format(format)

				if (this.step) {
					this.$emit('input', value)
					this.$emit('change', value)
					this.showPicker = false
				}
				this.step++
			}
		},

		watch: {
			value: {
				handler (val) {
					const value = dateWrapper(val, this.format)

					this.time = value.isValid() ? value.time : dateWrapper().time
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
