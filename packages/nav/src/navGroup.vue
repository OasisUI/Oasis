<template>
	<div
		:class="[
			'o-NavGroup',
			right ? 'o-NavGroup--right' : ''
		]"
	>
		<slot></slot>
	</div>
</template>

<script>
	const props = {
		right: {
			type: Boolean,
			default: false
		}
	}
	export default {
		name: 'NavGroup',
		props
	}
</script>
