import Select from '@/select/src'
import Popup from '@/popup/src'
import {
	mount,
	createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Popup)

describe('Select', () => {
	it('render', () => {
		const wrapper = mount(Select, {
			localVue
		})
		expect(wrapper.isVueInstance()).toBeTruthy()
		expect(wrapper.classes()).toContain('o-Select')
	})

	it('disabled', () => {
		const wrapper = mount(Select, {
			localVue,
			propsData: {
				disabled: true
			}
		})
		expect(wrapper.classes()).toContain('is-disabled')
	})

	it('select option', () => {
		const wrapper = mount(Select, {
			localVue,
			propsData: {
				options: ['a', 'b', 'c']
			}
		})
		wrapper.find('.o-Select').trigger('click')
		expect(wrapper.find('.o-Popup__inner').isVisible()).toBe(true)
		wrapper.findAll('.o-Input__options li').at(2).trigger('click')
		expect(wrapper.emitted().input).toEqual([['c']])
		expect(wrapper.emitted().change).toEqual([['c']])
		setTimeout(() => {
			expect(wrapper.find('input').element.value).toEqual('c')
		}, 10)
	})
})
