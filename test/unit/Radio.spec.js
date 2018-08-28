import Radio from '@/radio'
import {
	mount
} from '@vue/test-utils'
import {
	createInstance,
	destroyInstance
} from '../helper'

describe('Radio', () => {
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

	it('change event', (done) => {
		const wrapper = createInstance({
			render () {
				return (<Radio
					v-model={this.value}
					label={this.label}
					onChange={this.onChange}
				></Radio>)
			},
			data () {
				return {
					label: 1,
					value: '',
					changed: false
				}
			},
			methods: {
				onChange () {
					this.changed = true
				}
			}
		})
		expect(wrapper.value).toEqual('')
		wrapper.$el.click()
		setTimeout(() => {
			expect(wrapper.value).toEqual(1)
			expect(wrapper.changed).toBeTruthy()
			destroyInstance(wrapper)
			done()
		})
	})
})
