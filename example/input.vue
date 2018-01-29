<template>
	<ul class="doc">
		<li>
			<h1>InputText</h1>
		</li>
		<li class="input-list">
			<h2>Size: lg / md / sm</h2>
			<InputText
				v-model="inputText"
				size="lg"
				placeholder="placeholder"
			>
			</InputText>
			<InputText
				v-model="inputText"
				size="md"
				placeholder="placeholder"
			>
			</InputText>
			<InputText
				v-model="inputText"
				size="sm"
				placeholder="placeholder"
			>
			</InputText>
		</li>
		<li class="input-list">
			<h2>Readonly / Disabled</h2>
			<InputText
				v-model="inputText"
				size="lg"
				:options="inputTextOptions"
				placeholder="placeholder"
				readonly
			>
			</InputText>
			<InputText
				v-model="inputText"
				size="lg"
				:options="inputTextOptions"
				placeholder="placeholder"
				disabled
			>
			</InputText>
		</li>
		<li class="input-list">
			<h2>Options</h2>
			<InputText
				v-model="inputText"
				size="lg"
				:options="inputTextOptions"
				placeholder="placeholder"
			>
			</InputText>
		</li>
		<li>
			<h1>InputNumber</h1>
		</li>
		<li class="input-list">
			<InputNumber
				v-model="inputNumber"
				suffix="px"
				:min="0"
				:max="10"
				appendsuffix
			>
			</InputNumber>
			<InputNumber
				v-model="inputNumber"
				suffix="px"
				disabled
			>
			</InputNumber>
			<InputNumber
				v-model="inputNumber"
				suffix="px"
				readonly
			>
			</InputNumber>
		</li>
		<li>
			<h1>InputSelect</h1>
		</li>
		<li class="input-list">
			<InputSelect
				v-model="inputSelect"
				:options="inputSelectOptions"
			></InputSelect>
			<InputSelect
				v-model="inputSelect"
				:options="inputSelectOptions"
				disabled
			></InputSelect>
			<InputSelect
				v-model="inputSelect"
				:options="inputSelectOptions"
				readonly
			></InputSelect>
		</li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				inputText: 'input text',
				inputTextOptions: ['Alice', 'Bob', 'Eve'],
				inputNumber: 2,
				inputSelect: 2,
				inputSelectOptions: [
					{
						key: '二手',
						value: 1
					},
					{
						key: '家政',
						value: 2
					},
					{
						key: '维修',
						value: 3
					}
				]
			}
		}
	}
</script>

<style lang="postcss">
	.input-list {
		& .o-Input {
			width: 200px;
		}
	}
</style>
