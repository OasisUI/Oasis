<template lang="docs">

	# Navigator 导航

	## Navbar 基本使用

	:::html
		<Navbar>
			<NavItem>Home</NavItem>
			<NavItem>Component</NavItem>
			<NavItem>API</NavItem>
			<NavGroup right>
				<Avatar
					src="https://cloud.githubusercontent.com/assets/848515/21667899/c46e1fba-d337-11e6-9f9b-62a28deb6d32.png"
					name="Oasis"
				>Oasis</Avatar>
			</NavGroup>
		</Navbar>
	:::


	## SideNav

	:::html
		<SideNav>
			<SubNav>
				<template slot="title">
					Group 1
				</template>
				<NavItem>
					Navigator A
				</NavItem>
			</SubNav>
			<SubNav>
				<template slot="title">
					Group 2
				</template>
				<NavItem>
					Navigator B
				</NavItem>
				<NavItem>
					Navigator C
				</NavItem>
				<SubNav>
					<template slot="title">
						Group 2
					</template>
					<NavItem>
						Navigator B
					</NavItem>
					<NavItem>
						Navigator C
					</NavItem>
				</SubNav>
			</SubNav>
			<NavItem>
				Navigator E
			</NavItem>
		</SideNav>
	:::

	## Navigator API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|fixed|固定于视窗|`Boolean`|`false`|

</template>

<script>
	export default {
		data () {
			return {
				currentPage: 1,
				listing: {
					limit: 10,
					total: 255
				}
			}
		},
		methods: {
			onPageChange (page) {
				this.currentPage = page
				console.log(page)
			},
			linkFormatter (page) {
				return `/baike/${page}`
			}
		}
	}
</script>

<style scoped>

</style>
