import RadioBtn from '@/radioBtn'
import {
	mount
} from '@vue/test-utils'
import {
	createInstance,
	destroyInstance,
} from '../helper'

describe('RadioBtn', () => {
	it('render', () => {
		const wrapper = mount(RadioBtn)
		expect(wrapper.isVueInstance()).toBe(true)
		expect(wrapper.classes()).toContain('o-RadioBtn')
	})

	it('disabled', () => {
		const wrapper = mount(RadioBtn, {
			propsData: {
				disabled: true
			}
		})
		expect(wrapper.classes()).toContain('is-disabled')
	})

	it('change event', (done) => {
		const wrapper = createInstance({
			render () {
				return (<RadioBtn
					v-model={this.value}
					label={this.label}
					onChange={this.onChange}
				></RadioBtn>)
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
