<template>
	<thead>
		<tr class="o-Table__head">
			<slot></slot>
		</tr>
	</thead>
</template>

<script>
	const props = {
		columns: Array
	}

	export default {
		name: 'TableHead',
		props
	}
</script>
