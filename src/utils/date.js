export function getWeekDays () {
	// TODO: lang
	return ['日', '一', '二', '三', '四', '五', '六']
}

export function getDaysOfMonth (year, month) {
	const d = dateWrapper(new Date(year, month - 1))
	return new Array(countDaysOfMonth(year, month) + d.weekday).fill(null).map((day, index) => {
		const date = index - d.weekday
		return date >= 0 ? dateWrapper(new Date(year, month - 1	, date + 1)) : {}
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
	return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

export function dateWrapper (date) {
	date = date instanceof Date ? date : new Date(date)
	return {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		date: date.getDate(),
		weekday: date.getDay(),
		_: date
	}
}
