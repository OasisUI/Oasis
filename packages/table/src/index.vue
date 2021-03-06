<script>
	import TableBody from './tableBody'
	import TableHead from './tableHead'
	import TableColumn from './tableColumn'
	import Pagination from '@oasis-ui/pagination'
	import {
		throttle
	} from '../../../utils'

	const props = {
		data: {
			type: Array,
			default () {
				return []
			}
		},
		selectable: Boolean,
		summary: Boolean,
		pagination: Boolean,
		innerWidth: String,
		emptyMsg: {
			type: String,
			default: '暂无数据'
		},
		currentPage: {
			type: [String, Number],
			default: 1
		},
		total: {
			type: [String, Number],
			default: 0
		},
		pageSize: {
			type: [String, Number],
			default: 10
		}
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
			const tableStyle = {
				minWidth: this.innerWidth
			}
			const footer = this.hasFooter ? <div class="o-TableWrapper__footer">
				{this.summary ? <div class="o-TableWrapper__footer__summary">
					共{this.total || 0}条，当前展示{this.data ? this.data.length : 0}条
				</div> : null}
				{this.pagination ? <Pagination
					onCurrent-change={this.onPageChange}
					currentPage={this.currentPage}
					pageSize={this.pageSize}
					total={this.total}
				/> : null}
			</div> : null

			return (
				<div
					class={['o-TableWrapper ', {
						'o-TableWrapper--hasFooter': this.hasFooter,
						'is-empty': this.isEmpty
					}]}
				>
					<div class="o-TableWrapper__body">
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
								/> : null}
								{this.$slots.default}
							</TableHead>
							<TableBody
								sortedColumns={this.sortedColumns}
								data={this.data}
							/>
						</table>
						{this.isEmpty && <div class="o-TableWrapper__empty">
							{this.emptyMsg}
						</div>}
					</div>
					{footer}
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
			},
			hasFooter () {
				return this.summary || this.pagination
			},
			isEmpty () {
				return !this.data || !this.data.length
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
					data
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
			}, 23, true),
			onPageChange (page) {
				this.$emit('page-change', page)
			}
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
