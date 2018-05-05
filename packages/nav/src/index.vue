<template>
	<div
		:class="[
			'o-Navbar',
			fixed ? 'o-Navbar--fixed' : ''
		]"
	>
		<slot></slot>
	</div>
</template>

<script>
	const props = {
		fixed: {
			type: Boolean,
			default: false
		}
	}

	export default {
		name: 'Navbar',
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
		}
	}

</script>
