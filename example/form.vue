<template>
	<div>
		<FormGroup
			:form-item-layout="{
				labelCol: 4,
				wrapperCol: 20
			}"
		>
			<FormItem
				label="name"
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
				label="gender"
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
		</FormGroup>
	</div>
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
