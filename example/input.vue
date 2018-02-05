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
				name="radio"
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
		<li>
			<h1>InputCheckbox</h1>
		</li>
		<li>
			<h2>Base</h2>
		</li>
		<li class="input-list">
			<label>
				<InputCheckbox
					v-model="inputCheckbox"
				>A
				</InputCheckbox>
			</label>
			<label>
				<InputCheckbox
					v-model="inputCheckbox"
					disabled
				>B
				</InputCheckbox>
			</label>
			<p>
				value: {{inputCheckbox}}
			</p>
		</li>
		<li>
			<h2>CheckboxGroup</h2>
		</li>
		<li class="input-list">
			<CheckboxGroup
				v-model="inputCheckboxGroup"
			>
				<label>
					<InputCheckbox
						label="inputCheckbox"
					>A
					</InputCheckbox>
				</label>
				<label>
					<InputCheckbox
						:label="{group: 'checkbox'}"
					>B
					</InputCheckbox>
				</label>
			</CheckboxGroup>
			<p>
				value: {{inputCheckboxGroup}}
			</p>
		</li>
		<li>
			<h1>InputRadio</h1>
		</li>
		<li>
			<h2>Base</h2>
		</li>
		<li class="input-list radio-list">
			<InputRadio
				:label="{key: 'A'}"
				v-model="inputRadio"
			>A</InputRadio>
			<InputRadio
				label="B"
				v-model="inputRadio"
				disabled
			>B</InputRadio>
			<InputRadio
				label="C"
				v-model="inputRadio"
			>C</InputRadio>
			<p>
				value: {{inputRadio}}
			</p>
		</li>
		<li>
			<h2>RadioGroup</h2>
		</li>
		<li class="input-list radio-list">
			<RadioGroup
				v-model="inputRadioGroup"
			>
				<InputRadio label="GroupItem1"></InputRadio>
				<InputRadio label="GroupItem2"></InputRadio>
				<InputRadio label="GroupItem3"></InputRadio>
			</RadioGroup>
			<p>
				radio group value: {{inputRadioGroup}}
			</p>
		</li>
		<li>
			<h3>RadioBtnGroup</h3>
		</li>
		<li class="input-list radio-list">
			<RadioGroup
				v-model="inputRadioGroup"
			>
				<InputRadioBtn label="GroupItem1">GroupItem1</InputRadioBtn>
				<InputRadioBtn label="GroupItem2">GroupItem2</InputRadioBtn>
				<InputRadioBtn label="GroupItem3">GroupItem3</InputRadioBtn>
			</RadioGroup>
			<RadioGroup
				v-model="inputRadioGroup"
				disabled
				size="lg"
			>
				<InputRadioBtn label="GroupItem1">GroupItem1</InputRadioBtn>
				<InputRadioBtn label="GroupItem2">GroupItem2</InputRadioBtn>
				<InputRadioBtn label="GroupItem3">GroupItem3</InputRadioBtn>
			</RadioGroup>
			<p>
				radio group value: {{inputRadioGroup}}
			</p>
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
				],
				inputCheckbox: false,
				inputRadio: 'B',
				inputRadioGroup: 'GroupItem1',
				inputCheckboxGroup: []
			}
		}
	}
</script>

<style lang="postcss">
	.input-list {
		& .o-Input:not(label) {
			width: 200px;
		}
	}
</style>
