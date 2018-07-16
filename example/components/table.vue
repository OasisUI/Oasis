<template lang="docs">
	# Table 表格

	## 基本使用

	<Button @click="updateData">updateData</Button>

	:::html
		<Table
			:columns="columns"
			:data="data"
			width="100%"
			height="300px"
			table-width="1000px"
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
				width="100"
			>
				<template slot-scope="row">
					<Button
						@click="deleteData(row)"
						type="danger"
					>Delete</Button>
				</template>
			</TableColumn>
		</Table>
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
