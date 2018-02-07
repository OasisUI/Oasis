<template>
	<ul class="doc">
		<li>
			<h1>Message</h1>
		</li>
		<li>
			<FormGroup
				:form-item-layout="{
					labelCol: 4,
					wrapperCol: 20
				}"
			>
				<FormItem
					label="type"
				>
					<InputSelect
						v-model="type"
						:options="['info', 'danger', 'warning', 'success']"
					></InputSelect>
				</FormItem>
				<FormItem
					label="text"
				>
					<Input v-model="text"/>
				</FormItem>
				<FormItem>
					<Button
						@click="showMessage"
						type="primary"
					>
						show message
					</Button>
				</FormItem>
			</FormGroup>
		</li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				n: 1,
				type: 'info',
				text: 'message'
			}
		},
		methods: {
			showMessage () {
				this.$message({
					text: `${this.text}`,
					duration: 5000,
					type: this.type
				})
			}
		}
	}
</script>
