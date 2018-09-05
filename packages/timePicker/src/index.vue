<template>
	<Input
		:value="currentTime"
		@focus="onFocus"
		class="o-InputTime"
		:size="size"
		:readonly="readonly"
		:disabled="disabled"
		html-readonly
	>
		<Modal
			slot="suffix"
			v-model="showPicker"
			:show-title="false"
		>
			<TimePicker
				:value="time"
				:format="format"
				@input="updateValue"
				ref="picker"
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
	import TimePicker from './timePicker'
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
			default: 'HH:mm:ss'
		},
		placeholder: String
	}

	export default {
		props,
		name: 'InputTime',
		components: {
			Modal,
			Input,
			TimePicker
		},
		data () {
			return {
				time: '',
				showPicker: false
			}
		},
		watch: {
			value: {
				handler (val) {
					this.time = this.formatValue(val).time
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
				this.$emit('input', dateWrapper(time).format(format))
				this.$nextTick(() => {
					this.showPicker = false
				})
			},

			updateValue (val) {
				this.time = val
			},

			formatValue (value, format) {
				format = format || this.format
				return dateWrapper(value, format)
			}
		},
		computed: {
			currentTime () {
				return this.formatValue(this.value).format(this.format)
			}
		}
	}
</script>
