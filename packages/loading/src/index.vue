<template>
	<transition name="o-Loading">
		<div
			v-show="show"
			appear
			:class="[
				'o-Loading',
				global ? 'is-global' : ''
			]"
		>
			<div class="o-Loading__inner u-center"></div>
		</div>
	</transition>
</template>

<script>
	const props = {
		global: Boolean
	}

	export default {
		name: 'Loading',

		props,

		data () {
			return {
				show: false
			}
		},

		methods: {
			loading (visiable) {
				this.show = visiable
			}
		}
	}
</script>
