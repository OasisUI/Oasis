<template>
	<li
		class="o-Page"
		:class="{
			'is-disabled': disabled
		}"
	>
		<a
			@click="go"
			:href="!disabled ? formatter(page) : ''"
			:target="target"
			class="o-Page__link"
		>
			<slot></slot>
		</a>
	</li>
</template>

<script>
	const props = {
		page: Number,
		disabled: Boolean
	}

	export default {
		props,
		inject: {
			nativeLink: 'nativeLink',
			formatter: 'formatter',
			target: 'target'
		},
		methods: {
			go (e) {
				!this.disabled && this.$parent.updatePage(this.page)
				!this.nativeLink && e.preventDefault()
			}
		}
	}
</script>
