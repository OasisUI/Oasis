<template>
	<ul class="doc">
		<li>
			<pagination
				@current-change="onPageChange"
				:current-page="currentPage"
				:page-size="listing.limit"
				:total="listing.total"
				layout="prev, pager, next"
				:formatter="linkFormatter"
				target="_blank"
			></pagination>
		</li>
		<li>
			<InputNumber v-model="currentPage"/>
		</li>
	</ul>
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
