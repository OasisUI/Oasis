<template>
	<div>
		<o-img :src="src"></o-img>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				src: ''
			}
		},
		mounted () {
			setTimeout(() => {
				this.src = 'https://i0.hdslb.com/bfs/bangumi/2f12de8bc1eee3ba9378b04a16a608425abd75d7.jpg@144w_144h.webp'
			}, 2000);
		}
	}
</script>
