<template>
	<ul
		class="o-Navbar"
	>
		<slot></slot>
	</ul>
</template>

<script>
	import SubNav from './subNav'
	import NavItem from './navItem'


	export default {
		name: 'Navbar',
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
