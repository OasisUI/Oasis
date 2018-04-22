<template lang="docs">

	# Navbar 导航

	## 基本使用

	:::html
		<Navbar>
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
		</Navbar>
	:::
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
