<template><section><ul class="doc">
	<li>
		<h1>Input</h1>
	</li>
	<li class="input-list">
		<Input v-model="inputText">
		<Input v-model="inputText">
			<i slot="addonBefore" class="iconfont icon-link" style="color: #888;"></i>
			<Button slot="addonAfter">Go!</Button>
		</Input>
<pre><code>&lt;/li&gt;
&lt;li&gt;
	&lt;h1&gt;Input&lt;/h1&gt;
&lt;/li&gt;
&lt;li class=&quot;input-list&quot;&gt;
	&lt;h2&gt;Size: lg / md / sm&lt;/h2&gt;
	&lt;Input
		v-model=&quot;inputText&quot;
		size=&quot;lg&quot;
		placeholder=&quot;placeholder&quot;
	&gt;
	&lt;/Input&gt;
	&lt;Input
		v-model=&quot;inputText&quot;
		size=&quot;md&quot;
		placeholder=&quot;placeholder&quot;
	&gt;
	&lt;/Input&gt;
	&lt;Input
		v-model=&quot;inputText&quot;
		size=&quot;sm&quot;
		placeholder=&quot;placeholder&quot;
	&gt;
	&lt;/Input&gt;
&lt;/li&gt;
&lt;li class=&quot;input-list&quot;&gt;
	&lt;h2&gt;Readonly / Disabled&lt;/h2&gt;
	&lt;Input
		v-model=&quot;inputText&quot;
		size=&quot;lg&quot;
		name=&quot;radio&quot;
		:options=&quot;inputTextOptions&quot;
		placeholder=&quot;placeholder&quot;
		readonly
	&gt;
	&lt;/Input&gt;
	&lt;Input
		v-model=&quot;inputText&quot;
		size=&quot;lg&quot;
		:options=&quot;inputTextOptions&quot;
		placeholder=&quot;placeholder&quot;
		disabled
	&gt;
	&lt;/Input&gt;
&lt;/li&gt;
&lt;li class=&quot;input-list&quot;&gt;
	&lt;h2&gt;Options&lt;/h2&gt;
	&lt;Input
		v-model=&quot;inputText&quot;
		size=&quot;lg&quot;
		:options=&quot;inputTextOptions&quot;
		placeholder=&quot;placeholder&quot;
	&gt;
	&lt;/Input&gt;
&lt;/li&gt;
&lt;li&gt;
	&lt;h1&gt;InputNumber&lt;/h1&gt;
&lt;/li&gt;
&lt;li class=&quot;input-list&quot;&gt;
	&lt;InputNumber
		v-model=&quot;inputNumber&quot;
		suffix=&quot;px&quot;
		:min=&quot;0&quot;
		:max=&quot;10&quot;
		appendsuffix
	&gt;
	&lt;/InputNumber&gt;
	&lt;InputNumber
		v-model=&quot;inputNumber&quot;
		suffix=&quot;px&quot;
		disabled
	&gt;
	&lt;/InputNumber&gt;
	&lt;InputNumber
		v-model=&quot;inputNumber&quot;
		suffix=&quot;px&quot;
		readonly
	&gt;
	&lt;/InputNumber&gt;
&lt;/li&gt;
&lt;li&gt;
	&lt;h1&gt;InputSelect&lt;/h1&gt;
&lt;/li&gt;
&lt;li class=&quot;input-list&quot;&gt;
	&lt;InputSelect
		v-model=&quot;inputSelect&quot;
		:options=&quot;inputSelectOptions&quot;
	&gt;&lt;/InputSelect&gt;
	&lt;InputSelect
		v-model=&quot;inputSelect&quot;
		:options=&quot;inputSelectOptions&quot;
		disabled
	&gt;&lt;/InputSelect&gt;
	&lt;InputSelect
		v-model=&quot;inputSelect&quot;
		:options=&quot;inputSelectOptions&quot;
		readonly
	&gt;&lt;/InputSelect&gt;
&lt;/li&gt;
&lt;li&gt;
	&lt;h1&gt;InputCheckbox&lt;/h1&gt;
&lt;/li&gt;
&lt;li&gt;
	&lt;h2&gt;Base&lt;/h2&gt;
&lt;/li&gt;
&lt;li class=&quot;input-list&quot;&gt;
	&lt;label&gt;
		&lt;InputCheckbox
			v-model=&quot;inputCheckbox&quot;
		&gt;A
		&lt;/InputCheckbox&gt;
	&lt;/label&gt;
	&lt;label&gt;
		&lt;InputCheckbox
			v-model=&quot;inputCheckbox&quot;
			disabled
		&gt;B
		&lt;/InputCheckbox&gt;
	&lt;/label&gt;
	&lt;p&gt;
		value: {{inputCheckbox}}
	&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
	&lt;h2&gt;CheckboxGroup&lt;/h2&gt;
&lt;/li&gt;
&lt;li class=&quot;input-list&quot;&gt;
	&lt;CheckboxGroup
		v-model=&quot;inputCheckboxGroup&quot;
	&gt;
		&lt;label&gt;
			&lt;InputCheckbox
				label=&quot;inputCheckbox&quot;
			&gt;A
			&lt;/InputCheckbox&gt;
		&lt;/label&gt;
		&lt;label&gt;
			&lt;InputCheckbox
				:label=&quot;{group: 'checkbox'}&quot;
			&gt;B
			&lt;/InputCheckbox&gt;
		&lt;/label&gt;
	&lt;/CheckboxGroup&gt;
	&lt;p&gt;
		value: {{inputCheckboxGroup}}
	&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
	&lt;h1&gt;InputRadio&lt;/h1&gt;
&lt;/li&gt;
&lt;li&gt;
	&lt;h2&gt;Base&lt;/h2&gt;
&lt;/li&gt;
&lt;li class=&quot;input-list radio-list&quot;&gt;
	&lt;InputRadio
		:label=&quot;{key: 'A'}&quot;
		v-model=&quot;inputRadio&quot;
	&gt;A&lt;/InputRadio&gt;
	&lt;InputRadio
		label=&quot;B&quot;
		v-model=&quot;inputRadio&quot;
		disabled
	&gt;B&lt;/InputRadio&gt;
	&lt;InputRadio
		label=&quot;C&quot;
		v-model=&quot;inputRadio&quot;
	&gt;C&lt;/InputRadio&gt;
	&lt;p&gt;
		value: {{inputRadio}}
	&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
	&lt;h2&gt;RadioGroup&lt;/h2&gt;
&lt;/li&gt;
&lt;li class=&quot;input-list radio-list&quot;&gt;
	&lt;RadioGroup
		v-model=&quot;inputRadioGroup&quot;
	&gt;
		&lt;InputRadio label=&quot;GroupItem1&quot;&gt;&lt;/InputRadio&gt;
		&lt;InputRadio label=&quot;GroupItem2&quot;&gt;&lt;/InputRadio&gt;
		&lt;InputRadio label=&quot;GroupItem3&quot;&gt;&lt;/InputRadio&gt;
	&lt;/RadioGroup&gt;
	&lt;p&gt;
		radio group value: {{inputRadioGroup}}
	&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
	&lt;h3&gt;RadioBtnGroup&lt;/h3&gt;
&lt;/li&gt;
&lt;li class=&quot;input-list radio-list&quot;&gt;
	&lt;RadioGroup
		v-model=&quot;inputRadioGroup&quot;
	&gt;
		&lt;InputRadioBtn label=&quot;GroupItem1&quot;&gt;GroupItem1&lt;/InputRadioBtn&gt;
		&lt;InputRadioBtn label=&quot;GroupItem2&quot;&gt;GroupItem2&lt;/InputRadioBtn&gt;
		&lt;InputRadioBtn label=&quot;GroupItem3&quot;&gt;GroupItem3&lt;/InputRadioBtn&gt;
	&lt;/RadioGroup&gt;
	&lt;RadioGroup
		v-model=&quot;inputRadioGroup&quot;
		disabled
		size=&quot;lg&quot;
	&gt;
		&lt;InputRadioBtn label=&quot;GroupItem1&quot;&gt;GroupItem1&lt;/InputRadioBtn&gt;
		&lt;InputRadioBtn label=&quot;GroupItem2&quot;&gt;GroupItem2&lt;/InputRadioBtn&gt;
		&lt;InputRadioBtn label=&quot;GroupItem3&quot;&gt;GroupItem3&lt;/InputRadioBtn&gt;
	&lt;/RadioGroup&gt;
	&lt;p&gt;
		radio group value: {{inputRadioGroup}}
	&lt;/p&gt;
&lt;/li&gt;
</code></pre>
</Input></li></ul>
</section></template>

