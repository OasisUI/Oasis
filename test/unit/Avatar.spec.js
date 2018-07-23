import Avatar from '@/avatar/src'
import {
	shallowMount
} from '@vue/test-utils'

describe('Avatar', () => {
	it('render', () => {
		const wrapper = shallowMount(Avatar)
		expect(wrapper.isVueInstance()).toBe(true)
		expect(wrapper.classes()).toContain('o-Avatar')
	})

	it('src', () => {
		const wrapper = shallowMount(Avatar, {
			src: 'src'
		})
		setTimeout(() => {
			expect(wrapper.find('.o-Rahmen__image').attributes().style).toBe('padding-top: 100%; background: url("src") center center / 100% 100% no-repeat;')
		}, 0)
	})

	it('name', () => {
		const wrapper = shallowMount(Avatar, {
			name: 'name'
		})
		setTimeout(() => {
			expect(wrapper.find('.o-Avatar__name').text()).toBe('name')
		}, 0)
	})
})
