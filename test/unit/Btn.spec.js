import Button from '@/button'
import { shallowMount } from '@vue/test-utils'

describe('Button', () => {
	it('render Button', () => {
		const wrapper = shallowMount(Button, {
			propsData: {
				disabled: true
			}
		})

		expect(wrapper.isVueInstance()).toBeTruthy()
	})
})
