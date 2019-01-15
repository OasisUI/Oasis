import Table from '@/table'
import {
	querySelector as $,
	createInstance,
	destroyInstance
} from '../helper'

describe('Table', () => {
	it('render', done => {
		const wrapper = renderTable()

		process.nextTick(() => {
			expect(wrapper._isVue).toBeTruthy()
			expect($('tr', wrapper.$el).length).toEqual(11)
			expect($('.o-Checkbox', wrapper.$el)[0]).toBeDefined()
			expect($('.o-Pagination', wrapper.$el)[0]).toBeDefined()
			expect($('td.o-Table--stickyLeft', wrapper.$el)[1].innerHTML).toEqual('value1')
			destroyInstance(wrapper)
			done()
		})
	})
})

function renderTable (option = {}) {
	return createInstance({
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
					}
				],
				data: new Array(10).fill({
					column1: 'value1',
					column2: 'value2',
					column3: 'value3'
				}),
				pagination: true,
				summary: true,
				selectable: true,
				total: 100,
				pageSize: 10,
				currentPage: 1,
				...option.data,
				pages: []
			}
		},
		render () {
			return (
				<Table
					data={this.data}
					total={this.total}
					pageSize={this.pageSize}
					currentPage={this.currentPage}
					pagination={this.pagination}
					summary={this.summary}
					selectable={this.selectable}
					onCurrent-change={this.handlePageChange}
				>
					{this.columns.map(column => <Table.Column
						prop={column.prop}
						fixed={column.fixed}
					/>)}
				</Table>
			)
		},

		methods: {
			handlePageChange (page) {
				this.pages.push(page)
			}
		}
	})
}
