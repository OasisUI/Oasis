import Radio from '@/radio'
import RadioBtn from '@/radioBtn'
import RadioGroup from '@/radioGroup'
import {
	mount
} from '@vue/test-utils'
import {
	createInstance,
	destroyInstance
} from '../helper'

describe ('RadioGroup', () => {
	it('render', () => {
		const wrapper = mount(RadioGroup)
		expect(wrapper.isVueInstance()).toBe(true)
		expect(wrapper.classes()).toContain('o-RadioGroup')
	})

	it('disabled', () => {
		const wrapper = createInstance({
			data () {
				return {
					value: ''
				}
			},
			render () {
				return (<RadioGroup
					v-model={this.value}
					disabled
				>
					<Radio label={1}/>
					<Radio label={2}/>
					<Radio label={3}/>
				</RadioGroup>)
			}
		})
		expect(wrapper.$el.querySelectorAll('.o-Radio.is-disabled').length).toEqual(3)
		destroyInstance(wrapper)
	})

	it('change event', (done) => {
		const wrapper = createInstance({
			render () {
				return (<RadioGroup
					v-model={this.value}
					label={this.label}
					onChange={this.onChange}
				>
					<Radio label={1}/>
					<Radio label={2}/>
					<Radio label={3}/>
				</RadioGroup>)
			},
			data () {
				return {
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
		wrapper.$el.querySelectorAll('.o-Radio')[0].click()
		setTimeout(() => {
			expect(wrapper.value).toEqual(1)
			expect(wrapper.changed).toBeTruthy()
			destroyInstance(wrapper)
			done()
		})
	})
})
