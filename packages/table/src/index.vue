<template>
	<table class="o-Table">
		<TableHead>
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
		data: Array
	}

	export default {
		name: 'Table',
		props,
		data () {
			return {
				columns: []
			}
		},
		components: {
			TableHead,
			TableBody
		},
		methods: {
			insertColumn (index, columnConfig) {
				this.columns.splice(index, 0, columnConfig)
			},
			removeColumn (index) {
				this.columns.splice(index, 1)
			}
		}
	}
</script>
