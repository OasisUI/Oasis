export function getWeekDays () {
	// TODO: lang
	return ['日', '一', '二', '三', '四', '五', '六']
}

export function getDaysOfMonth (year, month) {
	const d = dateWrapper(new Date(year, month - 1))
	return new Array(countDaysOfMonth(year, month) + d.weekday).fill(null).map((day, index) => {
		day = index - d.weekday
		return day >= 0 ? new D(year, month, day + 1) : {}
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

export function dateWrapper (date) {
	date = date instanceof Date ? date : new Date(date)
	return new D(
		date.getFullYear(),
		date.getMonth() + 1,
		date.getDate(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds()
	)
}

export class D {
	constructor (year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
		this._ = new Date(year, month - 1, day, hour, minute, second)
	}

	get year () {
		return this._.getFullYear()
	}

	set year (val) {
		this._.setFullYear(val)
	}

	get month () {
		return this._.getMonth() + 1
	}

	set month (val) {
		this._.setMonth(val - 1)
	}

	get day () {
		return this._.getDate()
	}

	set day (val) {
		this._.setDate(val)
	}

	get hours () {
		return this._.getHours()
	}

	get minutes () {
		return this._.getMinutes()
	}

	get seconds () {
		return this._.getSeconds()
	}

	get time () {
		return this._.getTime()
	}

	get weekday () {
		return this._.getDay()
	}

	get unixTime () {
		return this._.getTime()
	}
}
