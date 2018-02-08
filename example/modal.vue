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
				<template>
					<p>Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. </p>
					<p>Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</p>
				</template>
				<template slot="footer">
					<Button
						@click="show = false"
						type="primary"
						outline
					>
						取消
					</Button>
					<Button
						@click="confirm"
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
					@click="messageBox('alert', 'info')"
				>
					$alert:info
				</Button>
				<Button
					@click="messageBox('alert', 'success')"
					type="primary"
				>
					$alert:success
				</Button>
				<Button
					@click="messageBox('alert', 'danger')"
					type="danger"
				>
					$alert:danger
				</Button>
				<Button
					@click="messageBox('alert', 'warning')"
					type="warning"
				>
					$alert:warning
				</Button>
			</p>
			<p>
				<Button
					@click="messageBox('confirm')"
					outline
				>
					$confirm
				</Button>
				<Button
					@click="messageBox('prompt')"
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
			confirm () {
				this.show = false
				this.$message({
					type: 'success',
					text: 'confirmed ！',
					duration: 2000
				})
			},
			messageBox (modelName, type = 'info') {
				this['$' + modelName]({
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
			}
		}
	}
</script>
