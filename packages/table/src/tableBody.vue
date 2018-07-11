<template>
	<tbody>
		<tr
			v-for="(item, index) in data"
			:key="index"
			class="o-Table__row"
		>
			<td
				v-for="field in columns"
				:key="field.key"
				class="o-Table__cell"
				:class="{
					'o-Table--stickyLeft': field.fixed === 'left',
					'o-Table--stickyRight': field.fixed === 'right'
				}"
			>{{item[field.key]}}</td>
		</tr>
	</tbody>
</template>

<script>
	const props = {
		data: Array,
		columns: Array
	}

	export default {
		name: 'TableBody',
		props
	}
</script>
