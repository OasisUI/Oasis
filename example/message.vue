<template>
	<ul class="doc">
		<li>
			<h1>Message</h1>
		</li>
		<li>
			<Button
				@click="showMessage"
				type="primary"
			>
				show message
			</Button>
		</li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				n: 1
			}
		},
		methods: {
			showMessage () {
				this.$message({
					text: 'message: ' + this.n++,
					duration: 5000,
				})
			}
		}
	}
</script>
