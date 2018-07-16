<script>
	import TableBody from './tableBody'
	import TableHead from './tableHead'
	import TableColumn from './tableColumn'
	import Checkbox from '@oasis-ui/checkbox'
	import {
		debounce,
		throttle
	} from '../../../utils'

	const props = {
		data: Array,
		selectable: Boolean,
		width: String,
		height: String,
		tableWidth: String,
		tableHeight: String,
	}

	export default {
		name: 'Table',
		props,
		data () {
			return {
				columns: [],
				selectedRows: []
			}
		},
		render () {
			const wrapperStyle = {
				height: this.height,
				width: this.width
			}
			const tableStyle = {
				height: this.tableHeight,
				minWidth: this.tableWidth
			}

			return (
				<div
					class='o-TableWrapper'
					style={wrapperStyle}
				>
					<table
						class='o-Table'
						style={tableStyle}
					>
						<TableHead
							sortedColumns={this.sortedColumns}
							selectable={this.selectable}
						>
							{this.selectable ? <TableColumn
								fixed='left'
								selectable
								width='50'
							></TableColumn> : null}
							{this.$slots.default}
						</TableHead>
						<TableBody
							sortedColumns={this.sortedColumns}
							data={this.data}
						></TableBody>
					</table>
				</div>
			)
		},
		mounted () {
			this.$on('toggleAllSelector', this.toggleAllSelector)
			this.$on('toggleRowSelector', this.toggleRowSelector)
		},
		beforeDestroy () {
			this.$off('toggleAllSelector', this.toggleAllSelector)
			this.$off('toggleRowSelector', this.toggleRowSelector)
		},
		computed: {
			sortedColumns () {
				const columns = {
					leftFixed: [],
					flat: [],
					rightFixed: []
				}
				this.columns.forEach(column => {
					if (column.fixed === 'left') {
						columns.leftFixed.push(column)
					} else if (column.fixed === 'right') {
						columns.rightFixed.push(column)
					} else {
						columns.flat.push(column)
					}
				})
				return columns
			},
			isAllSelected () {
				return this.data.length && this.data.every(item => this.selectedRows.find((row => row === item)))
			}
		},
		methods: {
			isRowSelected (row) {
				return this.data.find(item => this.selectedRows.find((row => row === item)))
			},
			insertColumn (index, columnConfig) {
				this.columns.splice(index, 0, columnConfig)
			},
			removeColumn (index) {
				this.columns.splice(index, 1)
			},

			// https://github.com/vuejs/vue/issues/3699
			toggleAllSelector () {
				if (this.isAllSelected) {
					this.selectedRows.splice(0, this.selectedRows.length)
				} else {
					this.data.map(item => {
						if (!this.selectedRows.find((row => row === item))) {
							this.selectedRows.push(item)
						}
					})
				}
			},
			toggleRowSelector ($data) {
				const {
					data, $index
				} = $data
				const index = this.selectedRows.indexOf(data)
				if (index > -1) {
					this.selectedRows.splice(index, 1)
				} else {
					this.selectedRows.push(data)
				}
			},
			updateSeletedRow: throttle(function () {
				this.selectedRows = this.selectedRows.filter(item => {
					return this.data.indexOf(item) > -1
				})
			}, 23, true)
		},
		watch: {
			data: {
				handler (data) {
					this.updateSeletedRow()
				},
				deep: true
			},
			selectedRows: {
				handler (val) {
					this.$emit('select', val)
				}
			}
		},
		components: {
			TableHead,
			TableBody
		},
	}
</script>
