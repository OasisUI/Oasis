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

export default Table
