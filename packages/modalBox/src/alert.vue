<template>
	<Modal
		v-model="show"
		class="o-ModalBox o-ModalBox__alert"
		:class="[
			`is-${type}`
		]"
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
				@click="confirm"
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
		onConfirm: Function
	}

	export default {
		name: 'ModalAlert',
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
