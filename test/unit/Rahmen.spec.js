import Rahmen from '@/rahmen'
import {
	shallowMount, mount
} from '@vue/test-utils'

describe('Rahmen', () => {
	it('render', () => {
		const wrapper = shallowMount(Rahmen)
		expect(wrapper.isVueInstance()).toBeTruthy()
		expect(wrapper.classes()).toContain('o-Rahmen')
	})

	it('src', () => {
		const wrapper = shallowMount(Rahmen, {
			propsData: {
				src: 'src'
			}
		})

		setTimeout(() => {
			// Why we need setTimeout?
			expect(wrapper.find('.o-Rahmen__image').attributes().style).toBe('padding-top: 50%; background: url("src") center center / contain no-repeat;')
		}, 0)
	})

	it('ratio', () => {
		const wrapper = shallowMount(Rahmen, {
			propsData: {
				src: 'src',
				ratio: 1
			}
		})

		setTimeout(() => {
			expect(wrapper.find('.o-Rahmen__image').attributes().style).toBe('padding-top: 100%; background: url("src") center center / contain no-repeat;')
		}, 0)
	})

	it('type', () => {
		const wrapper = shallowMount(Rahmen, {
			propsData: {
				src: 'src',
				type: 'fill'
			}
		})

		setTimeout(() => {
			expect(wrapper.find('.o-Rahmen__image').attributes().style).toBe('padding-top: 100%; background: url("src") center center / 100% 100% no-repeat;')
		}, 0)
	})

	it('width', () => {
		const wrapper = shallowMount(Rahmen, {
			propsData: {
				src: 'src',
				width: '300px'
			}
		})

		setTimeout(() => {
			expect(wrapper.attributes().style).toBe('width: 300px;')
		}, 0)
	})
})
