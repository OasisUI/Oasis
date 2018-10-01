import DatePicker from '@/datePicker'
import {
	querySelector as $,
	createInstance,
	destroyInstance
} from '../helper'

describe('DatePicker', () => {
	it('render', () => {
		const wrapper = renderDatePicker()
		expect(wrapper._isVue).toBeTruthy()
		destroyInstance(wrapper)
	})

	it('focus', () => {

		const wrapper = renderDatePicker({
			data: {
				time: 0,
				format: 'x'
			}
		})
		const $input = $('input', wrapper.$el)[0]

		$input.focus()

		setTimeout(() => {
			const $selected = $('.o-DayPicker__day.is-selected', wrapper.$el)[0]
			expect($('.o-DatePicker', wrapper.$el)[0]).toBeDefined()
			expect($('label', $selected)[0].innerHTML).toEqual('1')
			destroyInstance(wrapper)
		}, 10)

	})

	it('input', () => {

		const wrapper = renderDatePicker({
			data: {
				time: 0,
				format: 'YYYY-MM-DD',
			}
		})
		const $input = $('input', wrapper.$el)[0]

		$input.focus()

		setTimeout(() => {
			const $selected = $('.o-DayPicker__day.is-selected', wrapper.$el)[0]

			expect($('.o-DatePicker', wrapper.$el)[0]).toBeDefined()
			expect($('label', $selected)[0].innerHTML).toEqual('1')
			$selected.nextElementSibling.click()

			setTimeout(() => {
				const $selected = $('.o-DayPicker__day.is-selected', wrapper.$el)[0]
				expect($('label', $selected)[0].innerHTML).toEqual('2')

				$('.o-Modal__footer .o-Btn--primary', wrapper.$el)[1].click()
				expect(wrapper.time).toEqual('0000-01-02')
				destroyInstance(wrapper)
			}, 10)
		}, 10)


	})

})

function renderDatePicker (option = {}) {
	return createInstance({
		data () {
			return {
				time: '2019/11/11',
				format: 'YYYY/MM/DD',
				...option.data
			}
		},
		render () {
			return (
				<DatePicker
					v-model={this.time}
					format={this.format}
				></DatePicker>
			)
		}
	})
}
