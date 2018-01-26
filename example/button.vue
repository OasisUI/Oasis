<template>
	<ul>
		<li>
			<o-button type="primary" size="lg" round>{{text}}</o-button>
			<o-button type="danger" size="lg" round>{{text}}</o-button>
			<o-button type="warning" size="lg" round>{{text}}</o-button>
			<o-button type="default" size="lg" round>{{text}}</o-button>
		</li>
		<li>
			<o-button type="primary" round :loading="loading">{{text}}</o-button>
			<o-button type="danger" round :loading="loading">{{text}}</o-button>
			<o-button type="warning" round loading>{{text}}</o-button>
			<o-button type="default" round loading>{{text}}</o-button>
		</li>
		<li>
			<o-button type="primary">{{text}}</o-button>
			<o-button type="danger" size="md">{{text}}</o-button>
			<o-button type="warning" size="md">{{text}}</o-button>
			<o-button type="default" size="md">{{text}}</o-button>
		</li>
		<li>
			<o-button type="primary" size="sm" outline round>{{text}}</o-button>
			<o-button type="danger" size="sm" outline round>{{text}}</o-button>
			<o-button type="warning" size="sm" outline round>{{text}}</o-button>
			<o-button type="default" size="sm" outline round>{{text}}</o-button>
		</li>
		<li>
			<o-button @click="onClick" :disabled="disabled" round>{{disabled ? 'disabled' : 'usable'}}</o-button>
			<o-button @click="onClick" round>click me!</o-button>
		</li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				disabled: true,
				loading: true,
				text: 'Button'
			}
		},
		methods: {
			onClick (e) {
				this.disabled = !this.disabled
				this.loading = !this.loading
				alert('click!')
			}
		}
	}
</script>

<style lang="postcss">
	ul {
		list-style: none;
		li {
			margin-top: 1rem;
		}
		button {
			margin-bottom: 0.4rem;
		}
	}
</style>
