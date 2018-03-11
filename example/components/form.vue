<template lang="docs">
	# Form 表单

	## 基本使用

	:::html
		<FormGroup
			:form-item-layout="{
				labelCol: 4,
				wrapperCol: 20
			}"
		>
			<FormItem
				label="Name"
			>
				<Input
					v-model="name"
				></Input>
			</FormItem>
			<FormItem
				label="E-mail"
				required
			>
				<Input
					v-model="email"
				></Input>
			</FormItem>
			<FormItem
				label="Gender"
			>
				<RadioGroup
					v-model="gender"
				>
					<Radio
						label="male"
					>male</Radio>
					<Radio
						label="famale"
					>female</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem>
				<Checkbox
					v-model="agree"
				>
					Terms of Use
				</Checkbox>
			</FormItem>
			<FormItem>
				<Button type="primary">submit</Button>
			</FormItem>
		</FormGroup>
	:::


	也可以单独为 `FormItem` 设置 `formItemLayout`，其的默认值是：

	```
		{
			labelCol: 4,
			wrapperCol: 20
		}
	```

	### 表单校验（TODO）

</template>

<script>
	export default {
		data () {
			return {
				name: '',
				email: '',
				gender: 'famale',
				agree: false
			}
		}
	}
</script>
