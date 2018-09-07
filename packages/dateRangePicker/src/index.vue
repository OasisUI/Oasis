<template>
	<Input
		@focus="showPicker = true"
		:value="value.join(delimiter)"
		class="o-DateRangePicker"
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
			<p class="o-DateRangePicker__currentValue">{{start}} - {{end}}</p>

			<DatePicker
				v-model="currentValue[0].time"
				:max="currentValue[1].time"
				:start="currentValue[0].time"
				:end="currentValue[1].time"
w				format="x"
			></DatePicker>
			<DatePicker
				v-model="currentValue[1].time"
				:min="currentValue[0].time"
				:start="currentValue[0].time"
				:end="currentValue[1].time"
				format="x"
			></DatePicker>
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

	const props = {
		value: {
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
		startFormat: {
			type: String,
			default: 'YYYY/MM/DD HH:mm:ss'
		},
		endFormat: {
			type: String,
			default: 'YYYY/MM/DD HH:mm:ss'
		},
		delimiter: {
			type: String,
			default: ' - '
		},
		placeholder: String
	}

	export default {
		props,

		name: 'InputDateRange',

		data () {
			return {
				showPicker: false,
				currentValue: null
			}
		},

		methods: {
			setValue () {
				const {
					startFormat,
					endFormat,
					currentValue
				} = this
				const value = [
					currentValue[0].format(startFormat),
					currentValue[1].format(endFormat)
				]
				this.$emit('input', value)
				this.$emit('change', value)

				this.showPicker = false
			}
		},

		watch: {
			value: {
				handler (value) {
					const {
						startFormat,
						endFormat
					} = this

					this.currentValue = Array.isArray(value) && value.length === 2 ?
						[dateWrapper(value[0], startFormat), dateWrapper(value[1], endFormat)] :
						[dateWrapper(0), dateWrapper()]
				},
				immediate: true
			}
		},

		computed: {
			start () {
				const {
					currentValue,
					startFormat
				} = this
				return currentValue[0].format(startFormat)
			},

			end () {
				const {
					currentValue,
					endFormat
				} = this
				return currentValue[1].format(endFormat)
			}
		},

		components: {
			DatePicker
		}
	}
</script>
