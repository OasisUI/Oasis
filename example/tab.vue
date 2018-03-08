<template>
	<div class="tab">
		<Scroll>
			<ul>
				<li
					v-for="co in components"
				>
					<router-link
						:to="{
					path: `/components/${co.path}`
				}"
					>
						{{`${co.title.en} ${co.title.zh}`}}
					</router-link>
				</li>
			</ul>
		</Scroll>
	</div>
</template>

<script>
	import { components } from './router'

	export default {
		data () {
			return {
				components: components.filter(co => co.title !== void(0))
			}
		}
	}
</script>

<style lang="postcss">
	.tab {
		z-index: 9;
		position: fixed;
		top: 0;
		left: 0;
		padding-top: 60px;
		width: 260px;
		height: 100%;
		text-align: left;
		ul {
			list-style: none;
			padding-left: 70px;
		}
		li {
			margin-bottom: 1.2rem;

			a {
				text-decoration: none;
				color: inherit;
			}
		}
	}
</style>
