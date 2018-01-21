<template>
	<ul>
		<li>
			<p>img</p>
			<o-form v-loading="showLoading">
				<o-img :src="src" class="img"></o-img>
			</o-form>
		</li>
		<li>
			<o-loading></o-loading>
		</li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				src: 'https://avatars3.githubusercontent.com/u/10026019?s=460&v=4',
				showLoading: true
			}
		},
		mounted () {
			setTimeout(() => {
				this.showLoading = false
			}, 4000);
		}
	}
</script>

<style>
	ul {
		list-style: none;
	}
	li {
		position: relative;
		width: 300px;
		min-height: 300px;
		/* box-shadow: 1px 2px 4px 1px rgba(0,0,0,0.2); */
	}
	.img {
		width: 100%;
	}
</style>
