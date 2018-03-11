<template>
	<nav>
		<router-link to="/">
			<img class="logo" src="../icon/icon.svg" alt="">
		</router-link>
		<router-link to="/components">文档</router-link>
		<a class="float-right" href="https://github.com/joe223/Oasis">Github</a>
	</nav>
</template>

<script>
	export default {}
</script>

<style lang="postcss">
	nav {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 60px;
		padding: 0 70px;
		background: white;
		text-align: left;
		/*box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.08), 0 1px 2px 0px rgba(0, 0, 0, 0.1);*/

		a {
			display: inline-block;
			height: 100%;
			color: #34B697;
			font-size: 16px;
			line-height: 60px;
			text-decoration: none;
			vertical-align: middle;
			&:not(:first-of-type):not(:last-of-type) {
				margin-left: 30px;
			}


			.logo {
				display: inline-block;
				margin-top: -8px;
				width: 70px;
				vertical-align: middle;
			}
		}
	}
	img {
		display: block;
		width: 100%;
		display: inline-block;
		vertical-align: middle;
	}
</style>
