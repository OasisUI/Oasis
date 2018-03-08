<script>
	import Tab from './tab'
	import Nav from './navbar'

	export default {
		render () {
			return (
				<div class="container">
					<Nav/>
					<Tab/>
					<div class="document">
						<router-view></router-view>
					</div>
				</div>
			)
		}
	}
</script>
