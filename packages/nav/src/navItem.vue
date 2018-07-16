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
	import { getParentComponentByType } from '../../../utils'

	export default {
		name: 'NavItem',
		data () {
			return {
				selected: false
			}
		},
		methods: {
			select () {
				getParentComponentByType(this, 'navigator').$emit('select', this)
			}
		}
	}
</script>
