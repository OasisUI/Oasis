<template>
	<ul class="o-Pagination">
		<PageLink
			:page="currentVal - step"
			:disabled="currentVal - step < 1"
		>
			{{prevStep}}
		</PageLink>
		<PageLink
			:page="currentVal - 1"
			:disabled="currentVal - 1 < 1"
		>
			{{prevText}}
		</PageLink>
		<PageLink
			v-for="(page, index) in pages"
			:key="index"
			:page="page"
			:class="{
				'is-active': page === currentVal
			}"
		>
			{{page}}
		</PageLink>
		<PageLink
			:page="currentVal + 1"
			:disabled="currentVal + 1 > totalPage"
		>
			{{nextText}}
		</PageLink>
		<PageLink
			:page="currentVal + step"
			:disabled="currentVal + step > totalPage"
		>
			{{nextStep}}
		</PageLink>
	</ul>
</template>

<script>
	import Link from './link'

	const props = {
		pageSize: Number,
		total: {
			type: Number,
			default: 0,
			required: true
		},
		currentPage: Number,
		layout: {
			type: String,
			default: 'prev, pager, next'
		},
		prevStep: {
			type: String,
			default: '«'
		},
		nextStep: {
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
		nativeLink: Boolean, // render native link or not
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
		name: 'Pagination',
		data () {
			return {
				currentVal: 1
			}
		},
		computed: {
			pages () {
				const limit = 7
				const { currentVal, totalPage } = this
				const arr = []

				if (totalPage > limit) {
					let start = currentVal - (limit - 1) / 2
					let end = currentVal + (limit - 1) / 2
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
				return Math.ceil(this.total / this.pageSize) || 1
			},
		},
		methods: {
			updatePage (page) {
				if (page !== this.currentVal) {
					this.currentVal = page
					this.$emit('current-change', page)
				}
			}
		},
		watch: {
			currentPage: {
				handler (val) {
					const { totalPage } = this
					this.currentVal = val > totalPage ? totalPage : val < 1 ? 1 : val
				},
				immediate: true
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
