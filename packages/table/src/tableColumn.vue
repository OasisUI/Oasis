<script>
	// https://jsfiddle.net/Lr2en4ck/52/
	import {
		getDomSize,
		getParentComponent
	} from '../../../utils'
	import Checkbox from '@oasis-ui/checkbox'

	const props = {
		fixed: {
			type: String,
			default: ''
		},
		label: String,
		prop: String,
		width: [String, Number],
		selectable: true
	}
	export default {
		name: 'TableColumn',
		props,
		data () {
			return {
				cellWidth: 0,
				style: {
					left: '',
					right: ''
				}
			}
		},
		render (h) {
			return (
				<th
					class={[
						'o-Table__column',
						this.fixed === 'left' ? 'o-Table--stickyLeft' : '',
						this.fixed === 'right' ? 'o-Table--stickyRight' : ''
					]}
					style={this.style}
					width={this.width}
				>
					{this.renderHeader(h)}
				</th>
			)
		},
		mounted () {
			const $table = this.$table
			const index = this.columnConfig.index
			$table.insertColumn(index, this.columnConfig)
			this.$nextTick(() => {
				this.cellWidth = getDomSize(this.$el).x
				if (index === $table.columns.length - 1) {
					$table.$emit('layout')
				}
			})
			$table.$on('layout', this.updateStyle)
		},
		beforeDestroy () {
			this.$table.$off('layout', this.updateStyle)
			this.$table.removeColumn(this.columnConfig.index)
		},
		methods: {
			updateStyle () {
				this.cellWidth = getDomSize(this.$el).x
				Object.assign(this.style, this.getStyle())
			},

			getStyle () {
				const {
					fixed,
					$table,
					columnConfig
				} = this
				if (!$table) return
				const tableColumns = $table.columns
				let offsetLeft = 0
				let	offsetRight = 0

				if (fixed === 'left') {
					for (let index = 0; index < columnConfig.index; index++) {
						offsetLeft += tableColumns[index].cellWidth
					}
				} else if (fixed === 'right') {
					for (let index = columnConfig.index + 1; index < tableColumns.length; index++) {
						offsetRight += tableColumns[index].cellWidth
					}
				}
				return {
					left: offsetLeft ? `${offsetLeft}px` : '',
					right: offsetRight ? `${offsetRight}px` : ''
				}
			},
			renderHeader (h) {
				const _this = this
				return this.selectable ? (
					<Checkbox
						value={_this.$table.isAllSelected}
						nativeOnClick={(e) => {
							_this.$table.$emit('toggleAllSelector')
							e.preventDefault()
						}}
					/>
				) : this.label || this.prop
			},
		},

		computed: {
			$table () {
				return getParentComponent(this, 'Table')
			},
			columnConfig () {
				const _this = this

				return {
					get index () {
						return _this.$parent.$children.indexOf(_this)
					},
					get prop () {
						return _this.prop
					},
					get label () {
						return _this.label
					},
					get fixed () {
						return _this.fixed
					},
					get style () {
						return _this.style
					},
					get cellWidth () {
						return _this.cellWidth
					},
					renderHeader (h) {
						return _this.renderHeader(h)
					},
					renderCell (h, row) {
						return _this.selectable ? (
							<Checkbox
								value={_this.$table.selectedRows.indexOf(row.data) > -1}
								nativeOnClick={(e) => {
									_this.$table.$emit('toggleRowSelector', row)
									e.preventDefault()
								}}
							/>
						) : ( _this.$scopedSlots.default ?
							_this.$scopedSlots.default(row)
							: _this.$slots.default || row.data[_this.prop])
					}
				}
			}
		}
	}
</script>
