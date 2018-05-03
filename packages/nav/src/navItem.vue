<template>
	<li
		@click="select"
		class="o-NavItem"
		:class="{
			'is-selected': selected
		}"
	>
		<slot></slot>
	</li>
</template>

<script>
	import { getParentComponent } from '../../../utils'

	export default {
		name: 'NavItem',
		data () {
			return {
				selected: false
			}
		},
		methods: {
			select () {
				getParentComponent(this, 'Navbar').$emit('select', this)
			}
		}
	}
</script>
