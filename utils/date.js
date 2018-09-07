import moment from 'moment'

export function getWeekDays () {
	// TODO: lang
	return ['日', '一', '二', '三', '四', '五', '六']
}

export function getDaysOfMonth (year, month) {
	const d = dateWrapper([year, month - 1])
	return new Array(Math.ceil((countDaysOfMonth(year, month) + d.weekDay) / 7) * 7)
		.fill(null)
		.map((day, index) => {
			return dateWrapper([year, month - 1]).add(index - d.weekDay, 'day')
		})
}

export function countDaysOfMonth (year, month) {
	if (month === 2) {
		return isLeapYear(year) ? 29 : 28
	} else {
		return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1]
	}
}

export function isLeapYear (year) {
	return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

export function dateWrapper (...args) {
	return new D(...args)
}

export class D {
	constructor (...args) {
		this._ = moment(...args)
	}

	get year () {
		return this._.year()
	}

	set year (val) {
		this._.year(val)
	}

	get month () {
		return this._.month() + 1
	}

	// base 1
	set month (val) {
		this._.month(val - 1)
	}

	get date () {
		return this._.date()
	}

	set date (val) {
		this._.date(val)
	}

	get weekDay () {
		return this._.day()
	}

	set weekDay (weekDay) {
		return this._.day(weekDay)
	}

	get hour () {
		return this._.hour()
	}

	set hour (val) {
		this._.hour(val)
	}

	get minute () {
		return this._.minute()
	}

	set minute (val) {
		return this._.minute(val)
	}

	get second () {
		return this._.second()
	}

	set second (val) {
		return this._.second(val)
	}

	get time () {
		return this._.valueOf()
	}

	set time (val) {
		this._ = moment(val)
	}

	get unixTime () {
		return this._.unix()
	}

	format (scheme = '') {
		return this._.format(scheme)
	}

	isValid () {
		return this._.isValid()
	}

	add (...args) {
		return new D(this._.add(...args))
	}

	isBetween (...args) {
		return this._.isBetween(...args)
	}
}
