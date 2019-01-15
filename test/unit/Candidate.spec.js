import Candidate from '@/candidate/src'
import Popup from '@/popup/src'
import {
	mount,
	createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Popup)

describe('Candidate', () => {
	it('render', () => {
		const wrapper = mount(Candidate, {
			localVue
		})
		expect(wrapper.isVueInstance()).toBeTruthy()
		expect(wrapper.classes()).toContain('o-Input')
	})

	it('disabled', () => {
		const wrapper = mount(Candidate, {
			localVue,
			propsData: {
				disabled: true
			}
		})
		expect(wrapper.classes()).toContain('is-disabled')
	})

	it('select option without key => value', () => {
		const wrapper = mount(Candidate, {
			localVue,
			propsData: {
				options: ['Alice', 'Bob', 'Eve']
			}
		})
		wrapper.find('.o-Input .o-Input__trigger').trigger('click')
		expect(wrapper.find('.o-Popup__inner').isVisible()).toBe(true)
		wrapper.findAll('.o-Input__options li').at(2).element.click()
		expect(wrapper.emitted().input).toEqual([['Eve']])
		expect(wrapper.emitted().change).toEqual([['Eve']])
	})
})
