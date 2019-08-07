<template>
	<transition appear :name="customTransition">
		<div
			v-if="show"
			class="o-Modal"
			@click.self.stop="close"
		>
			<div
				class="o-Modal__content"
				:class="customClass"
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
		value: {},
		showCloseBtn: {
			type: Boolean,
			default: true
		},
		showTitle: {
			type: Boolean,
			default: true
		},
		customClass: {
			type: String,
			default: ''
		},
		customTransition: {
			type: String,
			default: 'o-Modal'
		}
	}

	export default {
		name: 'Modal',
		props,
		data () {
			return {
				visible: true
			}
		},
		computed: {
			show: {
				get () {
					return this.value === void(0) ? this.visible : Boolean(this.value)
				},
				set (val) {
					val = Boolean(val)
					this.visible = val
					this.$emit('input', val)
				}
			}
		},
		methods: {
			close () {
				this.show = false
			},

			enableBodyScroll (enable) {
				if (!window || !window.document) return

				if (!this.bodyOriginStyle) {
					this.bodyOriginStyle = getComputedStyle(document.body).overflow
				}

				if (enable) {
					document.body.style.overflow = this.bodyOriginStyle
				} else {
					document.body.style.overflow = 'hidden'
				}
			}
		},
		watch: {
			show:{
				handler (val) {
					!val && this.$emit('close')
                   	this.enableBodyScroll(!val)
				},
				immediate: true
			}
		}
	}
</script>
