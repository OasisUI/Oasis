<template>
	<div class="home">
		<Nav></Nav>
		<div class="content">
			<img class="name" src="./../icon/name.svg" alt="">
			<p>An elegant UI framework for building prototype，</p>
			<p>based on Vue.js.</p>
			<div class="links">
				<router-link
					:to="{
						path: '/components'
					}"
					class="o-Btn o-Btn--primary o-Btn--lg o-Btn--round o-Btn--gradient"
				>Get Start</router-link>
				<a
					href="https://github.com/joe223/Oasis"
					class="o-Btn o-Btn--primary o-Btn--lg o-Btn--round o-Btn--ghost"
				>Github</a>
			</div>
		</div>
		<p class="license">MIT license</p>
	</div>
</template>

<script>
	import Nav from './navbar'

	export default {
		components: {
			Nav
		}
	}
</script>

<style lang="postcss" scoped>
	.home {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: #34B697;
		text-align: center;
		background: no-repeat url("../icon/bg.svg") center 100%/ 100% auto;

		&:after {
			display: inline-block;
			vertical-align: middle;
			content: '';
			height: 100%;
			width: 0;
		}
		.content {
			display: inline-block;
			vertical-align: middle;
			width: 500px;

			.name {
				width: 168px;
				margin-bottom: 30px;
			}
		}
	}
	.links {
		margin-top: 30px;

		.o-Btn {
			&:not(:last-of-type) {
				margin-right: 44px;
			}
			width: 160px;
			vertical-align: middle;
		}
	}
	.license {
		position: absolute;
		bottom: 1rem;
		width: 100%;
	}
</style>
