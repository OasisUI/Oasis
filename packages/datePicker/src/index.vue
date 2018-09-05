<template>
	<Input
		:value="currentTime"
		@focus="onFocus"
		class="o-InputDate"
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
			type: String
		},
		format: {
			type: String,
			default: 'YYYY-MM-DD'
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
				time: dateWrapper().time,
				showPicker: false
			}
		},
		watch: {
			value: {
				handler (val) {
					if (!val && !Number.isInteger(val)) return
					this.time = dateWrapper(this.value).time
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
			}
		},
		computed: {
			currentTime () {
				const { value, format } = this
				if (!value && !Number.isInteger(value)) return ''
				return dateWrapper(value).format(format)
			}
		}
	}
</script>
