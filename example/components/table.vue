<template lang="docs">
	# Table 表格

	## 基本使用

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
				<TableColumn
					label="Action"
					fixed="right"
				>
					<template slot-scope="item">
						<Button
							@click="deleteData(item)"
							type="danger"
						>Delete</Button>
					</template>
				</TableColumn>
			</Table>
		</div>
	:::

	```javascript
		export default {
			data () {
				return {
					columns: [
						{
							prop: 'column1',
							fixed: 'left'
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
					data: []
				}
			},
			mounted () {
				const data = []
				for (let i = 0; i < 20; i++) {
					data.push({
						column1: 'column1' + i,
						column2: 'column2' + i,
						column3: 'column3' + i,
						column4: 'column4' + i,
						column5: 'column5' + i,
					})
				}
				this.data = data
			},
			methods: {
				deleteData (data) {
					console.log(data)
				}
			}
		}
	```
</template>

<script>
	export default {
		data () {
			return {
				columns: [
					{
						prop: 'column1',
						fixed: 'left'
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
				data: []
			}
		},
		mounted () {
			const data = []
			for (let i = 0; i < 20; i++) {
				data.push({
					column1: 'column1' + i,
					column2: 'column2' + i,
					column3: 'column3' + i,
					column4: 'column4' + i,
					column5: 'column5' + i,
				})
			}
			this.data = data
		},
		methods: {
			deleteData (data) {
				console.log(data)
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

