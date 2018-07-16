<template>
	<div
		class="o-AvatarGroup"
	>
		<slot></slot>
	</div>
</template>

<script>
	const props = {
		size: {
			type: String,
			default: 'sm'
		}
	}

	export default {
		name: 'AvatarGroup',
		type: 'avatarGroup',
		props
	}
</script>
