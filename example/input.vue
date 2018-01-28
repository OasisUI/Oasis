<template>
	<ul class="doc">
		<li class="input-list">
			<InputText
				v-model="inputText"
				:options="inputTextOptions"
			>

			</InputText>
		</li>
		<li class="input-list"></li>
		<li class="input-list"></li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				inputText: 'input text',
				inputTextOptions: ['a', 'b']
			}
		}
	}
</script>

<style>
	.input-list {
		width: 200px;
	}
</style>
