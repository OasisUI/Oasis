import moment from 'moment'
import DateTimePicker from '@/dateTimePicker'
import {
	querySelector as $,
	createInstance,
	destroyInstance
} from '../helper'

describe('DateTimePicker', () => {
	it('render', () => {
		const wrapper = renderDateTimePicker()
		expect(wrapper._isVue).toBeTruthy()
		destroyInstance(wrapper)
	})

	it('input', () => {
		jest.useFakeTimers()
		const wrapper = renderDateTimePicker({
			date: {
				time: '2018/12/12 12:13:14',
				format: 'YYYY/MM/DD HH:mm:ss',
			}
		})
		const $input = $('input', wrapper.$el)[0]

		$input.focus()

		setTimeout(() => {
			const $selected = $('.o-DayPicker__day.is-selected', wrapper.$el)[0]
			const $statusGroup = $('.o-DatePicker__statusGroup', wrapper.$el)[0]
			expect($('.o-DatePicker', wrapper.$el)[0]).toBeDefined()
			expect($('button', $statusGroup)[0].innerHTML).toEqual(expect.stringMatching(/^2018/))
			expect($('button', $statusGroup)[1].innerHTML).toEqual(expect.stringMatching(/^12/))
			expect($('label', $selected)[0].innerHTML).toEqual('12')

			$('.o-Modal__footer .o-Btn--primary', wrapper.$el)[1].click()
			$selected.nextElementSibling.click()

			setTimeout(() => {
				const $selected = $('.o-TimeSpinner__Item.is-selected', wrapper.$el)
				expect($('.o-TimePicker', wrapper.$el)[0]).toBeDefined()
				expect($selected[0].innerHTML).toEqual('00')
				expect($selected[1].innerHTML).toEqual('00')
				expect($selected[2].innerHTML).toEqual('00')
				expect(moment(wrapper.$children[0].time).format(wrapper.format)).toEqual('2018/12/13 00:00:00')

				$selected[2].nextElementSibling.click()

				setTimeout(() => {
					$('.o-Modal__footer .o-Btn--primary', wrapper.$el)[1].click()
					setTimeout(() => {
						expect(wrapper.time).toEqual('2018/12/13 00:00:01')
						destroyInstance(wrapper)
					}, 10)
				}, 10)
			}, 10)
		}, 10)

		jest.runTimersToTime()
	})
})

function renderDateTimePicker (option = {}) {
	return createInstance({
		data () {
			return {
				time: '2018/12/12 12:13:14',
				format: 'YYYY/MM/DD HH:mm:ss',
				...option.data
			}
		},
		render () {
			return (
				<DateTimePicker
					v-model={this.time}
					format={this.format}
				></DateTimePicker>
			)
		}
	})
}
