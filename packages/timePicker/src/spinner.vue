<template>
	<ul
		@click.stop="setTime"
		@scroll.stop="onScroll"
		@mouseleave.stop="onScrollEnd"
		class="o-TimeSpinner"
	>
		<li
			v-for="(item, $index) in list"
			class="o-TimeSpinner__Item"
			:class="{
				'is-selected': value === $index
			}"
		>{{('0' + $index).slice(-2)}}</li>
	</ul>
</template>

<script>
	import {
		throttle
	} from '../../../utils'

	const props = {
		list: Number,
		value: Number
	}

	export default {
		name: 'TimeSpinner',
		props,
		mounted () {
			this.$nextTick(() => {
				this.updateScrollTop()
			})
		},
		methods: {
			updateScrollTop () {
				if (!this.$el) return
				const { $el } = this
				const top = $el.scrollTop
				const itemHeight = $el.children[0].offsetHeight
				$el.scrollTop = itemHeight * (this.value)
			},
			setTime (e) {
				const index = [].indexOf.call(this.$el.children, e.target)
				index > -1 && this.$emit('input', index)
			},
			onScroll: throttle(function (e) {
				this.updateValue()
			}, 60),
			onScrollEnd () {
				this.updateScrollTop()
			},
			updateValue () {
				const { $el } = this
				const top = $el.scrollTop
				const itemHeight = $el.children[0].offsetHeight
				const critical = parseInt(itemHeight / 2)
				let value = parseInt(top / itemHeight)
				if (top % itemHeight > critical) {
					value++
				}
				this.$emit('input', value)
			}
		},
		watch: {
			value: {
				handler (val) {
					this.updateScrollTop()
				},
				immediate: true
			}
		}
	}
</script>
