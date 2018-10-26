export default function loadImage (src) {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = res => {
			resolve([res, img])
		}
		img.onerror = reject
		img.src = src
	})
}
