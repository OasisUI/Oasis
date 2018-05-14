<template>
	<Input
		v-model="_currentTime"
		@focus="onFocus"
		class="o-InputDate"
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
				ref="picker"
				v-model="time"
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
	import { getDomSize, formatNumber } from "utils"
	import { dateWrapper } from "utils/date"

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
			type: String,
			default: 'md'
		},
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
				currentTime: 0,
				time: 0,
				showPicker: false
			}
		},
		watch: {
			value: {
				handler (val) {
					val = new Date(val).getTime()
					this.currentTime = val || 0
					this.time = val
				},
				immediate: true
			}
		},
		methods: {
			onFocus () {
				this.showPicker = true
			},
			setTime () {
				this.currentTime = this.time
				this.$emit('input', this._currentTime)
				this.showPicker = false
			}
		},
		computed: {
			_currentTime: {
				get () {
					const date = dateWrapper(this.currentTime)
					return `${formatNumber(date.year, 4)}/${formatNumber(date.month, 2)}/${formatNumber(date.day, 2)}`
				},
				set (val) {
					this.currentTime = val
				}
			}

		}
	}
</script>
