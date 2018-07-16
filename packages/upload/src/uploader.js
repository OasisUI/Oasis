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

	xhr.upload.onprogress = function (e) {
		options.onProgress(e)
	}

	xhr.onload = function (e) {
		if (xhr.status < 200 || xhr.status >= 300) {
			return options.onError(e)
		}
		return options.onSuccess(e)
	}

	xhr.onerror = function (err) {
		options.onError(err)
	}

	xhr.ontimeout = function (e) {
		options.onTimeout(e)
	}

	for (let key in headers) {
		headers.hasOwnProperty(key) && headers[key] !== null && xhr.setRequestHeader(key, headers[key])
	}

	xhr.send(data)

	return xhr
}
