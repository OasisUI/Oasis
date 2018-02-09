<template>
	<transition name="o-Modal">
		<div
			v-if="show"
			class="o-Modal"
		>
			<div
				class="o-Modal__content"
			>
				<div class="o-Modal__header">
					<slot name="header"></slot>
					<button
						v-if="showCloseBtn"
						@click="close"
						class="o-Modal__close"
					>
						<i class="iconfont icon-close"></i>
					</button>
				</div>
				<div class="o-Modal__body clearfix">
					<slot></slot>
				</div>
				<div class="o-Modal__footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	const props = {
		value: Boolean,
		showCloseBtn: {
			type: Boolean,
			default: true
		}
	}

	export default {
		name: 'Modal',
		props,
		computed: {
			show: {
				get () {
					return this.value
				},
				set (val) {
					this.$emit('input', val)
				}
			}
		},
		methods: {
			close () {
				this.show = false
				this.$emit('close')
			}
		}
	}
</script>
