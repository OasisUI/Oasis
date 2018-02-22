export default function uploader (options) {
	const {
		url,
		filename,
		file
	} = options

	const xhr = new XMLHttpRequest()
	const data = new FormData()
	const headers = options.headers || {}

	data.append(filename, file)

	xhr.open('POST', url, true)

	for(let key in headers) {
		headers.hasOwnProperty(key) && headers[key] !== null && xhr.setRequestHeader(key, headers[key])
	}

	xhr.onerror = function (err) {
		options.onError(err)
	}

	xhr.onload = function (e) {
		if (xhr.status < 200 || xhr.status >= 300) {
			return options.onError(e)
		}
		return options.onSuccess(e)
	}

	xhr.ontimeout = function (e) {
		options.onTimeout(e)
	}

	xhr.onprogress = function (e) {
		options.onProgress(e)
	}

	xhr.send(data)

	return xhr
}
