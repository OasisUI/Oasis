<template>
	<transition appear name="o-Message">
		<div
			v-show="show"
			class="o-Message"

		>
			<span
				class="o-Message__text"
				:class="[
					`o-Message--${type}`
				]"
			>
				{{text}}
			</span>
		</div>
	</transition>
</template>

<script>
	import Vue from 'vue'

	const props = {
		text: String,
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
				show: false
			}
		},
		mounted () {
			this.show = true
		},
		methods: {
			close () {
				const queue = Vue.prototype.$messageQueue
				const index = queue.indexOf(this)
				index > -1 && queue.splice(index, 1)
				this.show = false
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
