<template>
	<ul class="doc">
		<li>
			<h1>FormGroup</h1>
		</li>
		<li>
			<FormGroup
				:form-item-layout="{
					labelCol: 4,
					wrapperCol: 20
				}"
			>
				<FormItem
					label="Name"
				>
					<InputText
						v-model="name"
					></InputText>
				</FormItem>
				<FormItem
					label="E-mail"
				>
					<InputText
						v-model="email"
					></InputText>
				</FormItem>
				<FormItem
					label="Gender"
				>
					<RadioGroup
						v-model="gender"
					>
						<InputRadio
							label="male"
						>male</InputRadio>
						<InputRadio
							label="famale"
						>famale</InputRadio>
					</RadioGroup>
				</FormItem>
				<FormItem>
					<Button type="primary">submit</Button>
				</FormItem>
			</FormGroup>
		</li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				name: '',
				email: '',
				gender: 'famale'
			}
		}
	}
</script>
