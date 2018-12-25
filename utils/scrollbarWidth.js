/*eslint-disable */
/*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */

export default function scrollbarWidth() {
	let width = 0

	if (typeof document === 'undefined') {
		return width
	}

	let
		body = document.body,
		box = document.createElement('div'),
		boxStyle = box.style

	boxStyle.position = 'absolute';
	boxStyle.top = boxStyle.left = '-9999px';
	boxStyle.width = boxStyle.height = '100px';
	boxStyle.overflow = 'scroll';

	body.appendChild(box);

	width = box.offsetWidth - box.clientWidth;

	body.removeChild(box);

	return width;
}
