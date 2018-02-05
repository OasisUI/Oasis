<template>
	<button class="o-Btn"
		@click="onClick"
		:class="[
			'o-Btn--' + type,
			'o-Btn--' + size,
			round ? 'o-Btn--round' : '',
			outline ? 'o-Btn--outline' : '',
			disabled ? 'is-disabled' : '',
			gradient ? 'o-Btn--gradient' : ''
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
		gradient: Boolean
	}

	export default {
		name: 'Button',
		type: 'button',
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
