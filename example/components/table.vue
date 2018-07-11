<template lang="docs">
	## Table

	:::html
		<div class="table-wrapper">
			<Table
				:columns="columns"
				:data="data"
			>
				<TableColumn
					v-for="column in columns"
					:key="column.prop"
					:prop="column.prop"
					:fixed="column.fixed"
					:column="column"
				></TableColumn>
			</Table>
		</div>
	:::
</template>

<script>
	export default {
		data () {
			return {
				columns: [
					{
						prop: 'title',
						fixed: 'left'
					},
					{
						prop: 'column1',
					},
					{
						prop: 'column2',
					},
					{
						prop: 'column3',
					},
					{
						prop: 'column4',
					},
					{
						prop: 'column5',
					},
				],
				data: new Array(20).fill({
					title: 'Title',
					column1: 'column1',
					column2: 'column2',
					column3: 'column3',
					column4: 'column4',
					column5: 'column5',
				})
			}
		}
	}
</script>

<style>
	.table-wrapper {
		min-width: 700px;
		height: 300px;
		overflow: auto
	}

	.table-wrapper table {
		width: 800px;
	}
</style>

