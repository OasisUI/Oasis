<template>
	<Modal
		v-model="show"
		@close="cancel"
		class="o-ModalBox o-ModalBox__confirm"
	>
		<template
			slot="header"
		>
			<div v-html="title"></div>
		</template>
		<template>
			<Input
				v-model="value"
			/>
		</template>
		<template
			slot="footer"
		>
			<Button
				@click="cancel"
				type="primary"
				round
				ghost
				size="lg"
				class="o-ModalBox__cancelBtn"
			>
				{{cancelText}}
			</Button>
			<Button
				@click="confirm"
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
		onConfirm: Function,
		onCancel: Function,
		title: String,
		content: String
	}

	export default {
		name: 'ModalPrompt',
		props,
		data () {
			return {
				show: false,
				value: ''
			}
		},
		mounted () {
			this.show = true
		},
		methods: {
			confirm () {
				const { onConfirm, value } = this
				this.show = false
				onConfirm && onConfirm(value)
				this.$emit('confirm', value)
			},
			cancel () {
				const { onCancel } = this
				this.show = false
				onCancel && onCancel()
				this.$emit('cancel')
			}
		},
		components: {
			[Modal.name]: Modal,
			[Button.name]: Button,
			[Input.name]: Input
		}
	}
</script>
