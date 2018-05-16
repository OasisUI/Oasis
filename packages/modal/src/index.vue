<template>
	<transition name="o-Modal">
		<div
			v-if="show !== false"
			class="o-Modal"
			@click.self.stop="close"
		>
			<div
				class="o-Modal__content"
			>
				<div class="o-Modal__header">
					<slot
						v-if="showTitle"
						name="header"
					></slot>
					<button
						v-if="showCloseBtn"
						@click="close"
						class="o-Modal__close"
						type="button"
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
		value: {
			type: Boolean,
			default: true
		},
		showCloseBtn: {
			type: Boolean,
			default: true
		},
		showTitle: {
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
