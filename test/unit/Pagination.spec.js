import Pagination from '@/pagination'
import {
	mount
} from '@vue/test-utils'

describe('Pagination', () => {
	it('render', () => {
		const wrapper = mount(Pagination, {
			propsData: {
				currentPage: 2,
				pageSize: 10,
				total: 100
			}
		})

		expect(wrapper.isVueInstance()).toBe(true)
		expect(wrapper.classes()).toContain('o-Pagination')
		wrapper.destroy()
	})

	it('string', () => {
		const wrapper = mount(Pagination, {
			propsData: {
				currentPage: '2',
				pageSize: '10',
				total: '100'
			}
		})
		const activeEl = wrapper.find('.is-active'
		)
		expect(activeEl.exists()).toBeTruthy()
		expect(activeEl.text()).toEqual('2')
		wrapper.destroy()
	})

	it('nativeLink', () => {
		const wrapper = mount(Pagination, {
			propsData: {
				currentPage: '2',
				pageSize: '10',
				total: '100',
				nativeLink: true,
				formatter: function (page) {
					return `/page/${page}`
				}
			}
		})
		expect(wrapper.find('.o-Page.is-active a').attributes('href')).toEqual('/page/2')
		wrapper.destroy()
	})

	it('onPageChange', done => {
		const wrapper = mount(Pagination, {
			propsData: {
				currentPage: '2',
				pageSize: '10',
				total: '100'
			}
		})
		wrapper.findAll('.o-Page').at(5).find('a').element.click()
		setTimeout(() => {
			expect(wrapper.emitted('current-change')[0]).toEqual([5])
			wrapper.destroy()
			done()
		}, 10)
	})

	it('prev and next page', done => {
		const wrapper = mount(Pagination, {
			propsData: {
				currentPage: '2',
				pageSize: '10',
				total: '100'
			}
		})
		const $list = wrapper.findAll('.o-Page')

		$list.at(0).find('a').element.click()
		$list.at($list.length - 1).find('a').element.click()
		setTimeout(() => {
			expect(wrapper.emitted('current-change')).toEqual([[1],[2]])
			wrapper.destroy()
			done()
		}, 10)
	})

	it('first and last page', done => {
		const wrapper = mount(Pagination, {
			propsData: {
				currentPage: '2',
				pageSize: '10',
				total: '100'
			}
		})
		const $list = wrapper.findAll('.o-Page')

		$list.at(1).find('a').element.click()
		$list.at($list.length - 2).find('a').element.click()
		setTimeout(() => {
			expect(wrapper.emitted('current-change')).toEqual([[1], [10]])
			wrapper.destroy()
			done()
		}, 10)
	})

	it('prev and next group', done => {
		const wrapper = mount(Pagination, {
			propsData: {
				currentPage: '10',
				pageSize: '10',
				total: '200'
			}
		})
		const $list = wrapper.findAll('.o-Page')

		$list.at(2).find('a').element.click()
		$list.at($list.length - 3).find('a').element.click()
		setTimeout(() => {
			expect(wrapper.emitted('current-change')).toEqual([[6], [10]])
			wrapper.destroy()
			done()
		}, 10)
	})

	it('onPageChange', done => {
		const wrapper = mount(Pagination, {
			propsData: {
				currentPage: '2',
				pageSize: '10',
				total: '100'
			}
		})
		wrapper.findAll('.o-Page').at(5).find('a').element.click()
		setTimeout(() => {
			expect(wrapper.emitted('current-change')[0]).toEqual([5])
			wrapper.destroy()
			done()
		}, 10)
	})
})
