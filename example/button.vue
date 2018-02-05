<template>
	<ul class="doc">
		<li>
			<h1>Button & ButtonGroup</h1>
		</li>
		<li>
			<h2>Large button</h2>
			<Button type="primary" size="lg" round>primary</Button>
			<Button type="danger" size="lg" round>danger</Button>
			<Button type="warning" size="lg" round>warning</Button>
			<Button type="default" size="lg" round>default</Button>
		</li>
		<li>
			<h2>Loading</h2>
			<Button type="primary" round :loading="loading">default size</Button>
			<Button type="danger" round :loading="loading">default size</Button>
			<Button type="warning" round loading>default size</Button>
			<Button type="default" round loading>default size</Button>
		</li>
		<li>
			<h2>No circle</h2>
			<Button type="primary">{{text}}</Button>
			<Button type="danger" size="md">{{text}}</Button>
			<Button type="warning" size="md">{{text}}</Button>
			<Button type="default" size="md">{{text}}</Button>
		</li>
		<li>
			<h2>Linear gradient</h2>
			<Button type="primary" gradient>{{text}}</Button>
		</li>
		<li>
			<h2>Outline</h2>
			<Button type="primary" size="sm" outline round>{{text}}</Button>
			<Button type="danger" size="sm" outline round>{{text}}</Button>
			<Button type="warning" size="sm" outline round>{{text}}</Button>
			<Button type="default" size="sm" outline round>{{text}}</Button>
		</li>
		<li>
			<h2>Disabled</h2>
			<Button @click="onClick" type="primary" :disabled="!disabled" round>{{!disabled ? 'disabled' : 'usable'}}</Button>
			<Button @click="onClick" :disabled="disabled" round>{{disabled ? 'disabled' : 'usable'}}</Button>
			<Button @click="onClick" round>click me!</Button>
		</li>
		<li>
			<h2>Button group</h2>
			<ButtonGroup>
				<Button type="primary" size="lg" round>A</Button>
				<Button type="primary" size="lg" round outline>B</Button>
				<Button type="primary" size="lg" round outline>C</Button>
				<Button type="primary" size="lg" round outline>D</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button type="danger" size="md" round>A</Button>
				<Button type="danger" size="md" round>B</Button>
				<Button type="danger" size="md" round>C</Button>
				<Button type="danger" size="md" round>D</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button type="warning" outline>A</Button>
				<Button type="warning" outline>B</Button>
				<Button type="warning" outline>C</Button>
				<Button type="warning" outline>D</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button outline round>A</Button>
				<Button outline round>B</Button>
				<Button outline round>C</Button>
				<Button outline round>D</Button>
			</ButtonGroup>
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
	.doc {
		button {
			margin-bottom: 0.4rem;
		}
	}
</style>
