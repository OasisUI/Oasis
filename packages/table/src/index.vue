<template>
	<table class="o-Table">
		<TableHead :columns="columns">
			<slot></slot>
		</TableHead>
		<TableBody
			:columns="columns"
			:data="data"
		></TableBody>
	</table>
</template>

<script>
	import TableBody from './tableBody'
	import TableHead from './tableHead'

	const props = {
		columns: Array,
		data: Array
	}

	export default {
		name: 'Table',
		props,
		components: {
			TableHead,
			TableBody
		},
		mounted () {
			console.log(this.$slots.default)
		}
	}
</script>
