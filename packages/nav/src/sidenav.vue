<template>
	<ul
		class="o-SideNav"
	>
		<slot></slot>
	</ul>
</template>

<script>
	export default {
		name: 'SideNav',
		type: 'navigator',
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
		}
	}
</script>
