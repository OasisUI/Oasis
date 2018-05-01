<template>
	<Input
		v-model="currentTime"
		@focus="onFocus"
		class="o-InputTime"
	>
	<Modal
		v-model="showPicker"
		slot="options"
		:show-title="false"
	>
		<TimePicker
			ref="picker"
			v-model="time"
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
	import Input from '../../input/src'
	import TimePicker from './timePicker'
	import Modal from '../../modal/src'
	import { getDomSize } from "utils"

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
		name: 'InputTime',
		components: {
			Modal,
			Input,
			TimePicker
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
					this.currentTime = val || ''
					this.time = val || ''
				},
				immediate: true
			}
		},
		methods: {
			onFocus () {
				this.showPicker = true
			},
			setTime () {
				this.$emit('input', this.time)
				this.currentTime = this.time
				this.showPicker = false
			}
			// onBlur () {
			//
			// }
		}
	}
</script>
