<template>
	<div>
		<o-button :disabled="disabled" size="md">{{text}}</o-button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				disabled: false,
				text: 'Button'
			}
		}
	}
</script>
