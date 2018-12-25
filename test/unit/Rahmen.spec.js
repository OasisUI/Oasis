import Rahmen from '@/rahmen/src'
import {
	shallowMount
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

		// TODO:
		// expect(wrapper.find('.o-Rahmen__image').attributes().style).toBe('padding-top: 100%; background: url("src") center center / 100% 100% no-repeat;')

		expect(wrapper.vm.imageStyle).toEqual({
			paddingTop: '100%',
			background: 'center center / contain no-repeat url("src")'
		})
	})

	it('ratio', () => {
		const wrapper = shallowMount(Rahmen, {
			propsData: {
				src: 'src',
				ratio: 0.5
			}
		})

		expect(wrapper.vm.imageStyle).toEqual({
			paddingTop: '50%',
			background: 'center center / contain no-repeat url("src")'
		})
	})

	it('type', () => {
		const wrapper = shallowMount(Rahmen, {
			propsData: {
				src: 'src',
				type: 'fill'
			}
		})

		expect(wrapper.vm.imageStyle).toEqual({
			paddingTop: '100%',
			background: 'center center / 100% 100% no-repeat url("src")'
		})
	})

	it('width', () => {
		const wrapper = shallowMount(Rahmen, {
			propsData: {
				src: 'src',
				width: '300px'
			}
		})

		expect(wrapper.attributes().style).toBe('width: 300px;')
	})
})
