<template lang="docs">
	# Form 表单

	## 基本使用

	:::html
		<FormGroup
			:verify-result="verifyResult"
			label-width="80"
		>
			<FormItem
				label="Name"
				prop="name"
				tip="Your name"
			>
				<Input
					v-model="name"
				></Input>
			</FormItem>
			<FormItem
				label="Account"
				prop="email"
				tip="Your E-mail address"
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
				<Button
					@click="submit"
					type="primary"
				>submit</Button>
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
				agree: false,
				verifyResult: null
			}
		},
		methods: {
			submit () {
				const result = {}
				if (!this.name) {
					result.name = {
						msg: 'name is required',
						__status__: false
					}
				}
				if (!this.email) {
					result.email = {
						msg: 'email is required',
						__status__: false
					}
				}
				this.verifyResult = result
			}
		}
	}
</script>
