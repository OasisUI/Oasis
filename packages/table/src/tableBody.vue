<script>
	const props = {
		data: Array,
		sortedColumns: {
			type: Object,
			default () {
				return {
					leftFixed: [],
					flat: [],
					rightFixed: []
				}
			}
		}
	}

	export default {
		name: 'TableBody',
		props,
		render (h) {
			return (<tbody>
				{this.data.map((item, index) => {
					return (<tr class="o-Table__row">
						{this.renderFixedCell(h, this.sortedColumns.leftFixed, item, index)}
						{this.renderFixedCell(h, this.sortedColumns.flat, item, index)}
						{this.renderFixedCell(h, this.sortedColumns.rightFixed, item, index)}
					</tr>)
				})}
			</tbody>)
		},
		methods: {
			renderFixedCell (h, fixedColumns, data, $index) {
				return fixedColumns.length ?
					fixedColumns.map(column => {
						return <td
							class={[
								'o-Table__cell',
								column.fixed === 'left' ? 'o-Table--stickyLeft' : '',
								column.fixed === 'right' ? 'o-Table--stickyRight' : ''
							]}
							style={column.style}
							width={column.width}
							data-prop={column.prop}
						>
							{column.renderCell(h, {data, $index})}
						</td>
					}): null
			}
		},
		watch: {
			data: {
				handler (val) {
					this.$nextTick(() => {
						this.$parent.$emit('layout')
					})
				},
				deep: true
			}
		},
	}
</script>
