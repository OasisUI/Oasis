<template>
	<Modal
		ref="modal"
		v-model="show"
		class="o-ModalBox o-ModalBox__alert"
		:class="[
			`is-${type}`
		]"
		:show-close-btn="showCloseBtn"
		:show-title="showTitle"
		@close="handleClose"
	>
		<template
			slot="header"
		>
			<i
				class="iconfont o-ModalBox__icon"
				:class="`icon-modal-${type}`"
			></i>
			<div v-html="title"></div>
		</template>
		<template>
			<div v-html="content"></div>
		</template>
		<template
			slot="footer"
		>
			<Button
				@click="handleConfirm"
				:type="btnType"
				:outline="btnType === 'default'"
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
		title: {
			type: String,
			default: '提示'
		},
		content: String,
		type: String,
		confirmText: {
			type: String,
			default: '确定'
		},
		onConfirm: Function,
		onClose: Function,
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
		name: 'ModalAlert',
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
		computed: {
			btnType () {
				switch (this.type) {
					case 'success': return 'primary';
					case 'danger': return 'danger';
					case 'warning': return 'warning';
					default: return 'default'
				}
			}
		},
		components: {
			[Modal.name]: Modal,
			[Button.name]: Button
		}
	}
</script>
