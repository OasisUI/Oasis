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
			expect(wrapper.emitted('current-change')[0]).toEqual([4])
			wrapper.destroy()
			done()
		}, 10)
	})
})
