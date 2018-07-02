import InputNumber from '@/inputNumber'
import {
	mount
} from '@vue/test-utils'

describe('InputNumber', () => {
	it('render', () => {
		const wrapper = mount(InputNumber)
		expect(wrapper.isVueInstance()).toBeTruthy()
		expect(wrapper.classes()).toContain('o-InputNumber')
	})

	it('input', () => {
		const wrapper = mount(InputNumber, {
			propsData: {
				value: 2
			}
		})
		const input = wrapper.find('input')
		input.setValue('1')
		input.trigger('change')
		expect(wrapper.emitted().input).toEqual([[1]])
		expect(wrapper.emitted().change).toEqual([[1]])
	})

	it('increase and decrease', () => {
		const wrapper = mount(InputNumber, {
			propsData: {
				value: 2,
				step: 0.1
			}
		})
		const increaseBtn = wrapper.find('.o-InputNumber__add')
		const decreaseBtn = wrapper.find('.o-InputNumber__sub')
		increaseBtn.trigger('click')
		decreaseBtn.trigger('click')
		expect(wrapper.emitted().input).toEqual([[2.1], [2]])
	})

	it('max', () => {
		const wrapper = mount(InputNumber, {
			propsData: {
				value: 2,
				step: 1,
				max: 3
			}
		})
		const increaseBtn = wrapper.find('.o-InputNumber__add')
		increaseBtn.trigger('click')
		// Fix: #8
		increaseBtn.trigger('click')
		expect(wrapper.emitted().input).toEqual([[3]])
	})
})
