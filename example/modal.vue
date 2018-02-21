<template>
	<ul class="doc">
		<li>
			<h1>Modal</h1>
		</li>
		<li>
			<Button
				@click="show = !show"
				type="primary"
			>
				Toggle modal box
			</Button>
			<Modal v-model="show">
				<h2 slot="header">Hello world!</h2>
				<div style="height: 20px; overflow: scroll">
					<p>Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. </p>
					<p>Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</p>
				</div>
				<template slot="footer">
					<Button
						@click="show = false"
						type="primary"
						outline
					>
						取消
					</Button>
					<Button
						@click="onConfirm"
						type="primary"
					>
						确定
					</Button>
				</template>
			</Modal>
		</li>
		<li>
			<h1>ModalBox</h1>
		</li>
		<li>
			<p>
				<Button
					@click="alert('info')"
				>
					$alert:info
				</Button>
				<Button
					@click="alert('success')"
					type="primary"
				>
					$alert:success
				</Button>
				<Button
					@click="alert('danger')"
					type="danger"
				>
					$alert:danger
				</Button>
				<Button
					@click="alert('warning')"
					type="warning"
				>
					$alert:warning
				</Button>
			</p>
			<p>
				<Button
					@click="confirm"
					outline
				>
					$confirm
				</Button>
				<Button
					@click="prompt"
					outline
				>
					$prompt
				</Button>
			</p>
		</li>
	</ul>
</template>

<script>
	const props = {

	}

	export default {
		props,
		data () {
			return {
				show: false
			}
		},
		methods: {
			onConfirm () {
				this.show = false
				this.$message({
					type: 'success',
					text: 'confirmed ！',
					duration: 2000
				})
			},
			alert (type = 'info') {
				this.$alert({
					type: type,
					title: type,
					content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p><p>Curabitur aliquet quam id dui posuere blandit.</p>',
					confirmText: 'OK',
					onConfirm: () => {
						this.$message({
							text: 'confirm'
						})
					}
				})
			},
			confirm () {
				this.$confirm({
					title: '《Jane Eyre》',
					content: '你以为，因为我穷、低微、不美、矮小，我就没有灵魂，也没有心吗？',
					confirmText: 'Yes',
					cancelText: 'No',
					onConfirm: () => {
						this.$message({
							type: 'danger',
							text: 'Yes'
						})
					},
					onCancel: () => {
						this.$message({
							type: 'success',
							text: 'No'
						})
					}
				})
			},
			prompt () {
				this.$prompt({
					title: 'Your name:',
					// TODO: required: true,
					onConfirm: (value) => {
						this.$message({
							type: 'success',
							text: `Hello ${value}`
						})
					},
					onCancel: () => {
						this.$message({
							text: 'canceled'
						})
					}
				})
			}
		}
	}
</script>
