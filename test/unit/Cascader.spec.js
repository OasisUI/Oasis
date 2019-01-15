import Cascader from '@/cascader'
import Popup from '@/popup/src'
import {
	mount,
	createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Popup)

describe('Cascader', () => {
	it('render', () => {
		const wrapper = mount(Cascader, {
			localVue,
			propsData: {
				value: []
			}
		})
		expect(wrapper.isVueInstance()).toBeTruthy()
		expect(wrapper.classes()).toContain('o-Input')
		expect(wrapper.find('.o-Popup.o-Cascader__popup').exists()).toBeTruthy()
		wrapper.destroy()
	})

	it('disabled', () => {
		const wrapper = mount(Cascader, {
			localVue,
			propsData: {
				value: [],
				disabled: true
			}
		})
		expect(wrapper.classes()).toContain('is-disabled')
		wrapper.destroy()
	})

	it('select option without key => value', () => {
		const wrapper = mount(Cascader, {
			localVue,
			propsData: {
				value: [1, 12],
				options: [
					{
						label: 'Beijing',
						value: 1,
						children: [
							{
								label: 'Shijingshan',
								value: 11
							},
							{
								label: 'Fengtai',
								value: 12
							},
						]
					},
					{
						label: 'Shanghai',
						value: 2,
						children: [
							{
								label: 'Yangpu',
								value: 21
							},
							{
								label: 'Xujiahui',
								value: 22
							},
						]
					},
					{
						label: 'Shenzhen',
						value: 3
					}
				]
			}
		})
		wrapper.find('.o-Input').trigger('click')
		expect(wrapper.find('.o-Popup__inner').isVisible()).toBe(true)
		setTimeout(() => {
			wrapper.findAll('.o-CascaderMenu__item').at(3).element.click()
			expect(wrapper.emitted().input).toEqual([[[1, 11]]])
			expect(wrapper.emitted().change).toEqual([[[1, 11]]])
			wrapper.destroy()
			done()
		}, 10)
	})
})
