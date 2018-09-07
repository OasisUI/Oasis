import DateRangePicker from '@/dateRangePicker'
import {
	querySelector as $,
	createInstance,
	destroyInstance
} from '../helper'

describe('DateRangePicker', () => {
	it('render', () => {
		const wrapper = renderDateRangePicker()
		expect(wrapper._isVue).toBeTruthy()
		destroyInstance(wrapper)
	})

	it('input', () => {
		jest.useFakeTimers()
		const wrapper = renderDateRangePicker({
			date: {
				time: ['2018-12-12', '2018-12-22'],
				startFormat: 'YYYY/MM/DD 00:00',
				endFormat: 'YYYY/MM/DD 23:59'
			}
		})
		const $input = $('input', wrapper.$el)[0]

		$input.focus()

		setTimeout(() => {
			const $selected = $('.o-DayPicker__day.is-selected', wrapper.$el)

			$selected[0].nextElementSibling.click()
			$selected[1].nextElementSibling.click()

			setTimeout(() => {
				$('.o-Modal__footer .o-Btn--primary', wrapper.$el)[1].click()
				setTimeout(() => {
					expect(wrapper.time).toEqual(['2018/12/13 00:00', '2018/12/23 23:59'])
					destroyInstance(wrapper)
				}, 10)
			}, 10)
		}, 10)

		jest.runTimersToTime()
	})

	it('Select range', () => {
		jest.useFakeTimers()
		const wrapper = renderDateRangePicker({
			date: {
				time: ['2018-12-12', '2018-12-22'],
				startFormat: 'YYYY/MM/DD 00:00',
				endFormat: 'YYYY/MM/DD 23:59'
			}
		})
		const $input = $('input', wrapper.$el)[0]

		$input.focus()

		setTimeout(() => {
			const $selected = $('.o-DayPicker__day.is-selected', wrapper.$el)

			$selected[0].nextElementSibling.click()

			setTimeout(() => {
				expect($(`[data-date="${$selected[0].getAttribute('data-date')}"]`, wrapper.$el)[1].classList.contains('is-disabled')).toBeTruthy()
				destroyInstance(wrapper)
			}, 10)
		}, 10)

		jest.runTimersToTime()
	})
})

function renderDateRangePicker (option = {}) {
	return createInstance({
		data () {
			return {
				time: ['2018-12-12', '2018-12-22'],
				startFormat: 'YYYY/MM/DD 00:00',
				endFormat: 'YYYY/MM/DD 23:59',
				...option.data
			}
		},
		render () {
			return (
				<DateRangePicker
					v-model={this.time}
					start-format={this.startFormat}
					end-format={this.endFormat}
				></DateRangePicker>
			)
		}
	})
}
