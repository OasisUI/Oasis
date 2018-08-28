import Input from '@/input/src'
import {
	mount,
	shallowMount
} from '@vue/test-utils'

describe('Input', () => {
	it('render', () => {
		const wrapper = shallowMount(Input)
		expect(wrapper.isVueInstance()).toBeTruthy()
		expect(wrapper.classes()).toContain('o-Input')
		expect(wrapper.classes()).toContain('o-Input--lg')
	})

	it('type', () => {
		const passwordInputWrapper = shallowMount(Input, {
			propsData: {
				type: 'password'
			}
		}).find('.o-Input__native')

		const textareaInputWrapper = shallowMount(Input, {
			propsData: {
				type: 'textarea',
				rows: 10,
				cols: 20
			}
		}).find('.o-Input__native')

		expect(passwordInputWrapper.attributes().type).toEqual('password')
		expect(textareaInputWrapper.attributes().type).toEqual('textarea')
		expect(textareaInputWrapper.attributes().rows).toEqual('10')
		expect(textareaInputWrapper.attributes().cols).toEqual('20')
	})

	it('disabled', () => {
		const wrapper = shallowMount(Input, {
			propsData: {
				disabled: true
			}
		})
		expect(wrapper.classes()).toContain('is-disabled')
		expect(wrapper.find('input').attributes().disabled).toEqual('disabled')
	})

	it('readonly', () => {
		const wrapper = shallowMount(Input, {
			propsData: {
				readonly: true
			}
		})
		expect(wrapper.classes()).toContain('is-readonly')
		expect(wrapper.find('input').attributes().readonly).toEqual('readonly')
	})

	it('prefix & suffix', () => {
		const wrapper = shallowMount(Input, {
			slots: {
				prefix: ['<span>$</span>'],
				suffix: ['<span>px</span>']
			}
		})

		expect(wrapper.find('.o-Input__prefix').text()).toEqual('$')
		expect(wrapper.find('.o-Input__suffix').text()).toEqual('px')
	})

	it('addonBefore addonAfter', () => {
		const wrapper = shallowMount(Input, {
			slots: {
				addonBefore: ['<button>$</button>'],
				addonAfter: ['<button>px</button>']
			}
		}).findAll('.o-Input__addonWrapper')

		expect(wrapper.at(0).find('button').html()).toEqual('<button>$</button>')
		expect(wrapper.at(1).find('button').html()).toEqual('<button>px</button>')
	})
})
