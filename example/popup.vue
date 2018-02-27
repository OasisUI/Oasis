<template>
	<ul class="doc">
		<li>
			<Popup
				action="click"
				title="hello"
				content="world ！！！"
				ref="popup"
			>
			</Popup>
			<Button
				v-popup:popup.click
			>
				show Popup! 2
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
