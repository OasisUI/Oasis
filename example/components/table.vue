<template lang="docs">
	# Table 表格

	## 基本使用

	<Button @click="updateData">updateData</Button>

	:::html
		<div class="table-wrapper">
			<Table
				:columns="columns"
				:data="data"
				selectable
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
							fixed: 'left',
						},
						{
							prop: 'column2',
							fixed: 'left',
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
				this.updateData()
			},
			methods: {
				deleteData (data) {
					console.log(data)
				},
				updateData () {
					const data = []
					for (let i = 0; i < 5; i++) {
						data.push({
							column1: Math.random(),
							column2: Math.random(),
							column3: Math.random(),
							column4: Math.random(),
							column5: Math.random(),
						})
					}
					this.data = data
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
						fixed: 'left',
					},
					{
						prop: 'column2',
						fixed: 'left',
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
			this.updateData()
		},
		methods: {
			deleteData (data) {
				console.log(data)
			},
			updateData () {
				const data = []
				for (let i = 0; i < 5; i++) {
					data.push({
						column1: Math.random(),
						column2: Math.random(),
						column3: Math.random(),
						column4: Math.random(),
						column5: Math.random(),
					})
				}
				this.data = data
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

