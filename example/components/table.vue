<template lang="docs">
	# Table 表格

	## 基本使用

	<Button @click="updateData">updateData</Button>

	:::html
		<Table
			:data="data"
			inner-width="1000px"
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

	## 显示分页

	:::html
		<Table
			:data="data"
			inner-width="1000px"
			selectable
			pagination
			:total="100"
			:page-size="5"
			:current-page="1"
			@page-change="updateData"
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


	## 空数据提示

	:::html
		<Table inner-width="1000px">
			<TableColumn
				v-for="column in columns"
				:key="column.prop"
				:prop="column.prop"
			></TableColumn>
		</Table>
	:::

	## API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|data|待展示的数据|Array|`[]`|
	|currentPage|当前页码|Number|`1`|
	|pageSize|每页的数据条数|Number|`10`|
	|total|总数据条数|Number|`0`|
	|emptyMsg|空数据时提示文案|String|`暂无数据`|
	|innerWidth|Table控件内部宽度，超出Table宽度后出现滚动条|Number/String|``|
	|summary|是否展示统计数据|Boolean|`false`|
	|pagination|是否展示翻页控件|Boolean|`false`|
	|selectable|是否启用选择功能|Boolean|`false`|

	## Event

	|事件名|说明|参数|
	|---|---|---|
	|select|用户勾选时触发|`selectedRows: Array`|
	|page-change|翻页时触发|`page: Number`|
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
