<template>
	<button
		@click="onClick"
		:class="[
			'o-Btn--' + _type,
			'o-Btn--' + _size,
			_round ? 'o-Btn--round' : '',
			_ghost ? 'o-Btn--ghost' : '',
			_disabled ? 'is-disabled' : '',
			_gradient ? 'o-Btn--gradient' : '',
			_loading ? 'is-loading' : '',
		]"
		class="o-Btn"
		type="button"
	>
		<div
			class="o-Btn__wrapper"
		>
			<span v-if="_loading" class="o-Btn__loading"></span>
			<slot></slot>
		</div>
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
		ghost: Boolean,
		gradient: Boolean
	}

	export default {
		name: 'Button',
		type: 'button',
		props,
		data () {
			return {}
		},
		computed: {
			group () {
				return this.$parent
			},
			useGroup () {
				return this.group.$options.type === 'buttonGroup'
			},
			_type () {
				return this.useGroup ? this.group.type || this.type : this.type
			},
			_size () {
				return this.useGroup ? this.group.size || this.size : this.size
			},
			_ghost () {
				return this.useGroup ? this.group.ghost || this.ghost : this.ghost
			},
			_disabled () {
				return this.useGroup ? this.group.disabled || this.disabled : this.disabled
			},
			_gradient () {
				return this.useGroup ? this.group.gradient || this.gradient : this.gradient
			},
			_loading () {
				return this.useGroup ? this.group.loading || this.loading : this.loading
			},
			_round () {
				return this.useGroup ? this.group.round || this.round : this.round
			}
		},
		methods: {
			onClick (e) {
				if (!this.disabled) {
					this.$emit('click', e)
				}
			}
		}
	}
</script>
