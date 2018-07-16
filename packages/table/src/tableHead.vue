<script>
	const props = {
		selectable: Boolean,
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
		name: 'TableHead',
		props,
		render (h) {
			return (<thead>
				<tr class="o-Table__head">
					{this.$slots.default}
				</tr>
			</thead>)
		},
		methods: {
			renderFixedColum (h, fixedColumns, fixed) {
				// {this.renderFixedColum(this.sortedColumns.rightFixed, 'right')}
				return fixedColumns.length ?
					fixedColumns.map(column => {
						return <th
							class={[
								'o-Table__column',
								fixed === 'left' ? 'o-Table--stickyLeft' : 'o-Table--stickyRight'
							]}
						>
							return {column.renderHeader()}
						</th>
					}): null
			}
		}
	}
</script>
