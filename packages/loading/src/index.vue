<template>
	<div class="o-Loading">
		<div class="u-center o-Loading__spin">
			<svg viewBox="0 0 100 100">
				<path d="M 50 4, a 46 46 0 1 1 0, 92, a 46 46 0 1 1 0, -92" stroke-width="8" fill="none" stroke="#000000" stroke-opacity="0.14"></path>
				<path d="M 50 4, a 46 46 0 1 1 0, 92, a 46 46 0 1 1 0, -92" stroke-width="8" fill="none" stroke="#34B697" stroke-dasharray="296" stroke-dashoffset="165.11999999999999" stroke-linecap="round" class="o-Loading__inner"></path>
			</svg>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Loading'
	}
</script>
