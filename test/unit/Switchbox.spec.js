import Switchbox from '@/switchbox/src'
import {
	shallowMount
} from '@vue/test-utils'
import {
	querySelector as $,
	createInstance,
	destroyInstance,
} from '../helper'

describe('Switchbox', () => {
	it('render', () => {
		const wrapper = shallowMount(Switchbox)
		expect(wrapper.isVueInstance()).toBeTruthy()
		expect(wrapper.classes()).toContain('o-Switchbox')
	})

	it('disabled', () => {
		const wrapper = shallowMount(Switchbox, {
			propsData: {
				disabled: true
			}
		})
		expect(wrapper.classes()).toContain('is-disabled')
		expect(wrapper.find('input').attributes().disabled).toEqual('disabled')
	})

	it('input/change event', (done) => {
		const wrapper = createInstance({
			render () {
				return (<Switchbox
					v-model={this.value}
					onChange={this.onChange}
				>{this.slotContent}</Switchbox>)
			},
			data () {
				return {
					slotContent: 'content',
					value: false,
					changed: false
				}
			},
			methods: {
				onChange () {
					this.changed = true
				}
			}
		})
		wrapper.$el.click()
		setTimeout(() => {
			expect(wrapper.value).toEqual(true)
			expect(wrapper.changed).toBeTruthy()
			destroyInstance(wrapper)
			done()
		})
	})

	it('label', (done) => {
		const wrapper = createInstance({
			render () {
				return (<Switchbox
					v-model={this.value}
					label={this.label}
				>{this.slotContent}</Switchbox>)
			},
			data () {
				return {
					value: false,
					label: ['on', 'off']
				}
			}
		})
		const $label = $('.o-Switchbox__status', wrapper.$el)[0]

		expect($label.innerHTML).toEqual('off')
		wrapper.$el.click()
		setTimeout(() => {
			expect(wrapper.value).toEqual(true)
			expect($label.innerHTML).toEqual('on')
			destroyInstance(wrapper)
			done()
		})
	})
})
