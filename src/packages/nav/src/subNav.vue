<template>
	<li
		:class="{
			'is-open': isOpen
		}"
		class="o-SubNav"
	>
		<div
			@click.self="toggle"
			class="o-SubNav__title"
		>
			<slot name="title"></slot>
			<i class="o-SubNav__arrow iconfont icon-line-arrow-right"></i>
		</div>

		<ul
			ref="group"
			class="o-SubNav__group"
		>
			<slot></slot>
		</ul>
	</li>
</template>

<script>
	import { getDomSize } from "../../../utils";

	export default {
		name: 'SubNav',
		data() {
			return {
				isOpen: false
			}
		},
		methods: {
			toggle (e) {
				const $group = this.$refs.group
				if (!$group) return
				if (getDomSize($group).y) {
					this.isOpen = false
				} else {
					this.isOpen = true
				}
			}
		}
	}
</script>
