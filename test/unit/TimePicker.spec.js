import TimePicker from '@/timePicker'
import {
	querySelector as $,
	createInstance,
	destroyInstance
} from '../helper'

describe('TimePicker', () => {
	it('render', () => {
		const wrapper = renderTimePicker()
		expect(wrapper._isVue).toBeTruthy()
		destroyInstance(wrapper)
	})

	it('focus', () => {

		const wrapper = renderTimePicker({
			data: {
				time: '12:13:14',
				format: 'HH:mm:ss'
			}
		})
		const $input = $('input', wrapper.$el)[0]

		$input.focus()

		setTimeout(() => {
			const $selected = $('.o-TimeSpinner__Item.is-selected', wrapper.$el)
			expect($('.o-TimePicker', wrapper.$el)[0]).toBeDefined()
			expect($selected[0].innerHTML).toEqual('12')
			expect($selected[1].innerHTML).toEqual('13')
			expect($selected[2].innerHTML).toEqual('14')
			destroyInstance(wrapper)
		}, 10)

	})

	it('input', () => {

		const wrapper = renderTimePicker({
			data: {
				time: '01:00:00',
				format: 'HH:mm:ss',
			}
		})
		const $input = $('input', wrapper.$el)[0]

		$input.focus()

		setTimeout(() => {
			const $selected = $('.o-TimeSpinner__Item.is-selected', wrapper.$el)

			expect($('.o-TimePicker', wrapper.$el)[0]).toBeDefined()
			expect($selected[0].innerHTML).toEqual('01')
			$selected[0].nextElementSibling.click()

			setTimeout(() => {
				const $selected = $('.o-TimeSpinner__Item.is-selected', wrapper.$el)
				expect($selected[0].innerHTML).toEqual('02')

				$('.o-Modal__footer .o-Btn--primary', wrapper.$el)[1].click()
				expect(wrapper.time).toEqual('02:00:00')
				destroyInstance(wrapper)
			}, 10)
		}, 10)


	})

})

function renderTimePicker (option = {}) {
	return createInstance({
		data () {
			return {
				time: '12:13:14',
				format: 'HH:mm:ss',
				...option.data
			}
		},
		render () {
			return (
				<TimePicker
					v-model={this.time}
					format={this.format}
				></TimePicker>
			)
		}
	})
}
