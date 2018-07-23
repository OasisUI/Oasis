<template>
		<div
			:style="{
				height: `${height}px`
			}"
			class="o-Message"
		>
			<div
				ref="inner"
				class="o-Message__wrapper"
			>
				<transition appear name="o-Message">
					<div
						v-show="show"
						class="o-Message__inner"
					>
						<div
							class="o-Message__type"
							:class="[`is-${type}`]"
						>
							<i
								class="iconfont"
								:class="[`icon-modal-${type}`]"
							></i>
						</div>
						<div
							class="o-Message__content"
							:class="[
								`o-Message--${type}`
							]"
						>
							<h4
								class="o-Message__text"
							>{{text}}</h4>
							<p
								v-if="description"
								class="o-Message__desc"
							>{{description}}</p>
						</div>
						<button
							@click.stop="close"
							class="o-Message__closeBtn"
							type="button"
						>
							<i class="iconfont icon-close"></i>
						</button>
					</div>
				</transition>
			</div>
		</div>
</template>

<script>
	import Vue from 'vue'
	import {
		getDomSize
	} from '../../../utils'
	const props = {
		text: String,
		description: String,
		type: {
			type: String,
			default: 'info'
		},
		duration: Number
	}

	export default {
		name: 'Message',
		props,
		data () {
			return {
				height: 0,
				show: false
			}
		},
		mounted () {
			this.show = true
			this.$nextTick(() => {
				this.height = getDomSize(this.$refs.inner).y
			})
		},
		methods: {
			close ($messageQueue) {
				const queue = Array.isArray($messageQueue) ? $messageQueue : Vue.prototype.$messageQueue
				const index = queue.indexOf(this)
				index > -1 && queue.splice(index, 1)
				this.show = false
				this.height = 0
				this.$el.addEventListener('transitionend', this.clear)
			},
			clear () {
				this.$el.removeEventListener('transitionend', this.clear)
				this.$el.parentNode.removeChild(this.$el)
				this.$destroy()
			}
		}
	}
</script>
