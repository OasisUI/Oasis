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
			<div v-html="content"></div>
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
		name: 'ModalConfirm',
		props,
		data () {
			return {
				show: false
			}
		},
		mounted () {
			this.show = true
		},
		methods: {
			confirm () {
				const { onConfirm } = this
				this.show = false
				onConfirm && onConfirm()
				this.$emit('confirm')
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
			[Button.name]: Button
		}
	}
</script>
