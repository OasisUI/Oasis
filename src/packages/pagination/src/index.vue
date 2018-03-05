<template>
	<ul class="o-Pagination">
		<PageLink
			:page="currentPage - step"
			:disabled="currentPage - step < 1"
		>
			{{prevDecade}}
		</PageLink>
		<PageLink
			:page="currentPage - 1"
			:disabled="currentPage - 1 < 1"
		>
			{{prevText}}
		</PageLink>
		<PageLink
			v-for="(page, index) in pages"
			:key="index"
			:page="page"
			:class="{
				'is-active': page === currentPage
			}"
		>
			{{page}}
		</PageLink>
		<PageLink
			:page="currentPage + 1"
			:disabled="currentPage + 1 > totalPage"
		>
			{{nextText}}
		</PageLink>
		<PageLink
			:page="currentPage + step"
			:disabled="currentPage + step > totalPage"
		>
			{{nextDecade}}
		</PageLink>
	</ul>
</template>

<script>
	import Link from './link'

	const props = {
		pageSize: Number,
		total: Number,
		currentPage: Number,
		layout: {
			type: String,
			default: 'prev, pager, next'
		},
		prevDecade: {
			type: String,
			default: '«'
		},
		nextDecade: {
			type: String,
			default: '»'
		},
		prevText: {
			type: String,
			default: '‹'
		},
		nextText: {
			type: String,
			default: '›'
		},
		step: {
			type: Number,
			default: 10
		},
		nativeLink: Boolean,         // 如果这个参数是 true， 则会渲染原生 链接？或者参数名：ssr？
		formatter: {
			type: Function,
			default: function (page) {
				return `./${page}`
			}
		},
		target: String
	}

	export default {
		props,
		name: 'pagination',
		computed: {
			pages () {
				const limit = 7
				const { currentPage, totalPage } = this
				const arr = []

				if (totalPage > limit) {
					let start = currentPage - (limit - 1) / 2
					let end = currentPage + (limit - 1) / 2
					let offset = start < 1 ? 1 - start : 0
					offset -= end > totalPage ? end - totalPage : 0
					start += offset
					end += offset
					for (let index = start; index <= end; index ++) {
						arr.push(index)
					}
				} else {
					for (let index = 1; index <= totalPage; index++) {
						arr.push(index)
					}
				}
				return arr
			},
			totalPage () {
				return Math.ceil(this.total / this.pageSize)
			}
		},
		methods: {
			updatePage (page) {
				if (page !== this.currentPage) {
					this.$emit('current-change', page)
				}
			}
		},
		provide () {
			return {
				nativeLink: this.nativeLink,
				formatter: this.formatter,
				target: this.target
			}
		},
		components: {
			PageLink: Link
		}
	}
</script>
