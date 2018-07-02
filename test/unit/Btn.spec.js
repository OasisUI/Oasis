import Button from '@/button'
import { shallowMount } from '@vue/test-utils'

describe('Button', () => {
	it('render', () => {
		const wrapper = shallowMount(Button)
		expect(wrapper.isVueInstance()).toBeTruthy()
		expect(wrapper.classes()).toContain('o-Btn--default')
	})

	it('disabled', () => {
		const wrapper = shallowMount(Button,{
			propsData: {
				disabled: true
			}
		})
		expect(wrapper.classes()).toContain('is-disabled')
	})

	it('readonly', () => {
		const wrapper = shallowMount(Button,{
			propsData: {
				loading: true
			}
		})
		expect(wrapper.classes()).toContain('is-loading')
	})

	it('round', () => {
		const wrapper = shallowMount(Button,{
			propsData: {
				round: true
			}
		})
		expect(wrapper.classes()).toContain('o-Btn--round')
	})

	it('block', () => {
		const wrapper = shallowMount(Button,{
			propsData: {
				block: true
			}
		})
		expect(wrapper.classes()).toContain('o-Btn--block')
	})

	it('gradient', () => {
		const wrapper = shallowMount(Button,{
			propsData: {
				gradient: true
			}
		})
		expect(wrapper.classes()).toContain('o-Btn--gradient')
	})

	it('ghost', () => {
		const wrapper = shallowMount(Button,{
			propsData: {
				ghost: true
			}
		})
		expect(wrapper.classes()).toContain('o-Btn--ghost')
	})
})
