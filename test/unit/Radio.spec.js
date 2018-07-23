import Radio from '@/radio/src'
import {
	mount
} from '@vue/test-utils'

describe ('Radio', () => {
	it('render', () => {
		const wrapper = mount(Radio)
		expect(wrapper.isVueInstance()).toBe(true)
		expect(wrapper.classes()).toContain('o-Radio')
	})

	it('disabled', () => {
		const wrapper = mount(Radio, {
			propsData: {
				disabled: true
			}
		})
		expect(wrapper.classes()).toContain('is-disabled')
	})

	it('change', () => {
		const wrapper = mount(Radio, {
			propsData: {
				label: 1,
				value: ''
			}
		})
		wrapper.trigger('click')
		setTimeout(() => {
			expect(wrapper.vm.currentValue).toBe(1)
			expect(wrapper.emitted().change).toEqual([[1]])
		}, 10)
	})
})
