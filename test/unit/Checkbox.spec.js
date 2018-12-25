import Checkbox from '@/checkbox/src'
import CheckboxGroup from '@/checkbox/src/checkboxGroup'
import {
	shallowMount
} from '@vue/test-utils'
import {
	querySelector as $,
	createInstance,
	destroyInstance,
} from '../helper'

describe('Checkbox', () => {
	it('render', () => {
		const wrapper = shallowMount(Checkbox)
		expect(wrapper.isVueInstance()).toBeTruthy()
		expect(wrapper.classes()).toContain('o-Checkbox')
	})


	it('render group', (done) => {
		const wrapper = createInstance({
			render () {
				return (<CheckboxGroup
					v-model={this.value}
				>
					<Checkbox label="A">A</Checkbox>
					<Checkbox label="B">B</Checkbox>
					<Checkbox label="C">C</Checkbox>
				</CheckboxGroup>)
			},
			data () {
				return {
					value: ['A']
				}
			}
		})

		const $input = $('.o-Checkbox', wrapper.$el)[0]

		expect($input.classList.contains('is-checked')).toEqual(true)
		$('.o-Checkbox', wrapper.$el)[1].click()
		setTimeout(() => {
			expect(wrapper.value).toEqual(['A', 'B'])
			destroyInstance(wrapper)
			done()
		})
	})

	it('disabled', () => {
		const wrapper = shallowMount(Checkbox, {
			propsData: {
				disabled: true
			}
		})
		expect(wrapper.classes()).toContain('is-disabled')
		expect(wrapper.find('input').attributes().disabled).toEqual('disabled')
	})

	it('group disabled', (done) => {
		const wrapper = createInstance({
			render () {
				return (<CheckboxGroup
					v-model={this.value}
					disabled={true}
				>
					<Checkbox label="A">A</Checkbox>
					<Checkbox label="B">B</Checkbox>
					<Checkbox label="C">C</Checkbox>
				</CheckboxGroup>)
			},
			data () {
				return {
					value: ['A']
				}
			}
		})
		const $input = $('.o-Checkbox', wrapper.$el)[0]

		expect($input.classList.contains('is-disabled')).toEqual(true)
		$('.o-Checkbox', wrapper.$el)[1].click()
		setTimeout(() => {
			expect(wrapper.value).toEqual(['A'])
			destroyInstance(wrapper)
			done()
		})
	})

	it('input/change event', (done) => {
		const wrapper = createInstance({
			render () {
				return (<div><Checkbox
					v-model={this.value}
					onChange={this.onChange}
				>{this.slotContent}</Checkbox></div>)
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
		expect(wrapper.value).toEqual(false)

		$('.o-Checkbox', wrapper.$el)[0].click()

		setTimeout(() => {
			expect(wrapper.value).toEqual(true)
			expect(wrapper.changed).toBeTruthy()
			destroyInstance(wrapper)
			done()
		}, 20)
	})
})
