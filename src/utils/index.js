export function throttle (fn, delay = 10) {
	let last = 0
	return function (...arg) {
		const time = Date.now()
		if (time - last > delay) {
			last = time
			return fn.apply(this, arg)
		}
	}
}

export function debounce (fn, delay = 10) {
	let result,
		last = 0
	return function (...arg) {
		const time = Date.now()
		if (time - last > delay) {
			result = fn.apply(this, arg)
		}
		last = time
		return result
	}
}
