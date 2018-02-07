<template>
	<ul class="doc">
		<li>
			<h1>Modal</h1>
		</li>
		<li>
			<Button
				@click="show = !show"
				type="primary"
			>
				Toggle modal box
			</Button>
			<Modal v-model="show">
				<h1>Hello world!</h1>
			</Modal>
		</li>
	</ul>
</template>

<script>
	const props = {

	}

	export default {
		props,
		data () {
			return {
				show: false
			}
		}

	}
</script>
