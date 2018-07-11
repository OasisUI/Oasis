<script>
	const props = {
		data: Array,
		columns: Array
	}

	export default {
		name: 'TableBody',
		props,
		render () {
			return (<tbody>
				{this.data.map((item, index) => {
					return (<tr class="o-Table__row">
						{this.columns.map(field => {
							return (<td
								class={[
									'o-Table__cell',
									field.fixed === 'left' ? 'o-Table--stickyLeft' : '',
									field.fixed === 'right' ? 'o-Table--stickyRight' : ''
								]}
							>
								{item[field.prop]}
								{field.renderCell(item)}
							</td>)
						})}
					</tr>)
				})}
			</tbody>)
		}
	}
</script>
