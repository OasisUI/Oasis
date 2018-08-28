<template>
	<Modal
		v-model="show"
		@close="handleClose"
		:show-close-btn="showCloseBtn"
		:show-title="showTitle"
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
		onClose: Function,
		title: String,
		content: String,
		showCloseBtn: {
			type: Boolean,
			default: true
		},
		showTitle: {
			type: Boolean,
			default: true
		}
	}

	export default {
		name: 'ModalConfirm',
		props,
		data () {
			return {
				show: true
			}
		},
		methods: {
			handleConfirm () {
				const { onConfirm } = this
				this.show = false
				onConfirm && onConfirm()
			},
			handleClose () {
				const { onClose } = this
				onClose && onClose()
			}
		},
		components: {
			[Modal.name]: Modal,
			[Button.name]: Button
		}
	}
</script>
