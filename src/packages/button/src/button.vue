<template>
	<button class="o-Btn"
		@click="onClick"
		:class="[
			'o-Btn--' + type,
			'o-Btn--' + size,
			round ? 'round' : '',
			outline ? 'outline' : '',
			disabled ? 'is-disabled' : ''
		]"
		type="button"
	>
		<span v-if="loading" class="o-Btn__loading"></span>
		<slot></slot>
	</button>
</template>

<script>
	const props = {
		type: {
			type: String,
			default: 'default'
		},
		size: {
			type: String,
			default: 'md'
		},
		round: Boolean,
		loading: Boolean,
		disabled: Boolean,
		outline: Boolean,
	}

	export default {
		name: 'o-button',
		props,
		data () {
			return {}
		},
		methods: {
			onClick (e) {
				if (!this.disabled) {
					this.$emit('click', e)
				}
				e.stopPropagation()
			}
		}
	}
</script>
