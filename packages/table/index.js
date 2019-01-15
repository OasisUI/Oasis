import Table from './src'
import TableHead from './src/tableHead'
import TableBody from './src/tableBody'
import TableColumn from './src/tableColumn'

Table.install = function (Vue) {
	Vue.component(Table.name, Table)
	Vue.component(TableHead.name, TableHead)
	Vue.component(TableBody.name, TableBody)
	Vue.component(TableColumn.name, TableColumn)
}
Table.Head = TableHead
Table.Body = TableBody
Table.Column = TableColumn

export default Table
