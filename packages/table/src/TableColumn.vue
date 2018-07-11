<script>
	import {
		getParentComponent
	} from '../../../utils'

	const props = {
		fixed: {
			type: String,
			default: ''
		},
		label: String,
		prop: String
	}
	export default {
		name: 'TableColumn',
		props,
		data () {
			return {
				$table: null
			}
		},
		mounted () {
			const index = this.columnConfig.index
			this.$table = getParentComponent(this, 'Table')
			this.$table.insertColumn(index, this.columnConfig)
		},
		beforeDestroy () {
			this.$table = null
			this.$table.insertColumn(this.columnConfig.index)
		},
		render () {
			return <th
				class={[
					'o-Table__column',
					this.fixed === 'left' ? 'o-Table--stickyLeft' : '',
					this.fixed === 'right' ? 'o-Table--stickyRight' : ''
				]}
			>
				{this.label || this.prop}
			</th>
		},
		computed: {
			columnConfig () {
				const _this = this
				return {
					index: this.$parent.$children.indexOf(this),
					prop: this.prop,
					label: this.label,
					fixed: this.fixed,
					renderCell (data) {
						return _this.$scopedSlots.default ? _this.$scopedSlots.default(data) : _this.$slots.default
					}
				}
			}
		}
	}
</script>
