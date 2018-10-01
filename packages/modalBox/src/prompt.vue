<template>
	<Modal
		v-model="show"
		@close="handleClose"
		:show-close-btn="showCloseBtn"
		:show-title="showTitle"
		class="o-ModalBox o-ModalBox__prompt"
	>
		<template
			slot="header"
		>
			<div v-html="title"></div>
		</template>
		<template>
			<Input
				v-model="value"
				:html-type="inputType"
			/>
		</template>
		<template
			slot="footer"
		>
			<Button
				@click="show = false"
				type="primary"
				round
				ghost
				size="lg"
				class="o-ModalBox__cancelBtn"
			>
				{{cancelText}}
			</Button>
			<Button
				@click="handleConfirm"
				type="primary"
				round
				gradient
				size="lg"
				class="o-ModalBox__confirmBtn"
			>
				{{confirmText}}
			</Button>
		</template>
	</Modal>
</template>

<script>
	import Modal from '@oasis-ui/modal/src'
	import Button from '@oasis-ui/button/src'
	import Input from '@oasis-ui/input/src'

	const props = {
		confirmText: {
			type: String,
			default: '确认'
		},
		cancelText: {
			type: String,
			default: '取消'
		},
		validator: {
			type: Function,
			default () {}
		},
		onConfirm: Function,
		onClose: Function,
		onError: Function,
		title: String,
		content: String,
		showCloseBtn: {
			type: Boolean,
			default: true
		},
		showTitle: {
			type: Boolean,
			default: true
		},
		inputType: {
			type: String,
			default: 'text'
		}
	}

	export default {
		name: 'ModalPrompt',
		props,
		data () {
			return {
				show: true,
				value: ''
			}
		},
		methods: {
			handleConfirm () {
				const {
					value,
					onError,
					validator,
					onConfirm,
				} = this
				const result = validator(value)
				if (result instanceof Error) {
					onError && onError(result)
					return
				}
				this.show = false
				onConfirm && onConfirm(value)
			},
			handleClose () {
				const { onClose } = this
				onClose && onClose()
			}
		},
		components: {
			[Modal.name]: Modal,
			[Button.name]: Button,
			[Input.name]: Input
		}
	}
</script>
