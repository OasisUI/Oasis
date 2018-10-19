<template>
	<div
		:class="[
			'o-SideNav',
			fixed ? 'o-SideNav--fixed' : ''
		]"
	>
		<Scroll>
			<ul class="o-SideNav__list">
				<slot></slot>
			</ul>
		</Scroll>
	</div>
</template>

<script>
	import Scroll from '@oasis-ui/scrollbox'

	const props = {
		fixed: {
			type: Boolean,
			default: false
		}
	}

	export default {
		name: 'SideNav',
		type: 'navigator',
		props,
		data () {
			return {
				selectedItem: null
			}
		},
		mounted () {
			this.$on('select', this.select)
		},
		beforeDestroy () {
			this.$off('select', this.select)
		},
		methods: {
			select (navItem) {
				if (this.selectedItem) {
					this.selectedItem.selected = false
				}
				this.selectedItem = navItem
				this.selectedItem.selected = true
			}
		},
		components: {
			Scroll
		}
	}
</script>
