<template>
	<Input
		:value="currentTime"
		@focus="onFocus"
		class="o-InputDate"
		:size="size"
		:readonly="readonly"
		:disabled="disabled"
		:placeholder="placeholder"
		html-readonly
	>
		<Modal
			slot="suffix"
			v-model="showPicker"
			:show-title="false"
		>
			<DatePicker
				ref="picker"
				v-model="time"
				:start="startTime"
				:end="endTime"
				:range="range"
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
					@click="setTime"
					type="primary"
				>
					确定
				</Button>
			</template>
		</Modal>
	</Input>
</template>

<script>
	import Input from '@oasis-ui/input/src'
	import Modal from '@oasis-ui/modal/src'
	import DatePicker from './datePicker'
	import { dateWrapper } from 'utils/date'

	const props = {
		value: {},
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
			type: String
		},
		format: {
			type: String,
			default: 'YYYY-MM-DD'
		},
		start: {},
		end: {},
		range: Boolean,
		placeholder: String
	}

	export default {
		props,

		name: 'InputDate',

		components: {
			Modal,
			Input,
			DatePicker
		},

		data () {
			return {
				time: dateWrapper().time,
				showPicker: false
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

		methods: {
			onFocus () {
				this.showPicker = true
			},

			setTime () {
				const { time, format } = this
				const value = dateWrapper(time).format(format)
				this.$emit('input', value)
				this.$emit('change', value)
				this.$nextTick(() => {
					this.showPicker = false
				})
			}
		},

		computed: {
			currentTime () {
				const { value, format } = this
				const currentTime = dateWrapper(value, format)
				return currentTime.isValid() ? currentTime.format(format) : ''
			},

			startTime () {
				const { start, format } = this
				const time = dateWrapper(start, format)
				return time.isValid().time ? time : null
			},

			endTime () {
				const { end, format } = this
				const time = dateWrapper(end, format)
				return time.isValid().time ? time : null
			}
		}
	}
</script>
