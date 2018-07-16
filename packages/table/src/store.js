import Vue from '../../../node_modules/vue'

export default function () {
	return new Vue({
		data () {
			return {
				columns: []
			}
		},
		methods: {
			insertColumn (index, columnConfig) {
				this.columns.splice(index, 0, columnConfig)
			},
			removeColumn (index) {
				this.columns.splice(index, 1)
			}
		}
	})
}
