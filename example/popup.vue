<template>
	<ul class="doc">
		<li>
			<Popup
				action="click"
				title="hello"
				content="world ！！！"
				ref="popup"
			>
				<p>Hello </p>
			</Popup>
			<Button
				v-popup:popup.click
			>
				show Popup!
			</Button>
		</li>
	</ul>
</template>

<script>
	export default {
		mounted () {
			console.log(this)
		},
	}
</script>
