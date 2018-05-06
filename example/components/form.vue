<template lang="docs">
	# Form 表单

	## 基本使用

	:::html
		<FormGroup
			label-width="70"
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

	## Inline FormItem

	:::html
		<FormGroup
			inline
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
			<FormItem>
				<Button type="primary">submit</Button>
			</FormItem>
		</FormGroup>
	:::

	## Block FormLabel

	:::html
		<FormGroup
			block-label
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
			<FormItem>
				<Button type="primary">submit</Button>
			</FormItem>
		</FormGroup>
	:::

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
