<template>
	<th
		class="o-Table__column"
		:class="{
			'o-Table--stickyLeft': fixed === 'left',
			'o-Table--stickyRight': fixed === 'right'
		}"
	>{{label || prop}}</th>
</template>


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
		created () {

		},

		render () {
			return <th
				class='o-Table__column'
				class={{
					'o-Table--stickyLeft': item.fixed === 'left',
					'o-Table--stickyRight': item.fixed === 'right'
				}}
			>
			</th>
		},

		computed: {
			$table () {
				return getParentComponent(this, 'Table')
			}
		}
	}
</script>
