<template>
	<li
		:class="{
			'is-open': isOpen
		}"
		class="o-SubNav"
	>
		<div
			@click.stop="toggle"
			class="o-SubNav__title"
		>
			<slot name="title"></slot>
			<i class="o-SubNav__arrow iconfont icon-line-arrow-right"></i>
		</div>

		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
		>
			<ul
				v-show="isOpen"
				ref="group"
				class="o-SubNav__group"
			>
				<slot></slot>
			</ul>
		</transition>
	</li>
</template>

<script>
	import { getDomSize } from '../../../utils'

	export default {
		name: 'SubNav',

		data () {
			return {
				isOpen: false
			}
		},

		methods: {
			toggle () {
				const $group = this.$refs.group
				if (!$group || this.$isServer) return
				this.isOpen = !this.isOpen
			},

			beforeEnter (el) {
				el.style.height = '0'
			},

			enter (el) {
				const height = el.scrollHeight
				el.style.height = `${height}px`
			},

			afterEnter (el) {
				el.style.height = ''
			},

			beforeLeave (el) {
				const height = el.scrollHeight
				el.style.height = `${height}px`
			},

			leave (el) {
				if (getDomSize(el).y) {
					el.style.overflow = 'hidden'
					el.style.height = '0'
				}
			},

			afterLeave (el) {
				el.style.height = ''
				el.classList.remove('test')
			},

		}
	}
</script>
