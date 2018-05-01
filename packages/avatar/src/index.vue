<template>
	<div
		class="o-Avatar"
	>
		<Rahmen
			:src="src"
			width="100px"
			ratio="1"
		></Rahmen>
		<p>{{ name }}</p>
	</div>
</template>

<script>
	import Rahmen from '@oasis-ui/rahmen'

	const props = {
		displayName: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			default: ''
		},
		src: {
			type: String,
			default: ''
		}
	}

	export default {
		name: 'Avatar',
		props,
		comments: {
			Rahmen
		}
	}
</script>
