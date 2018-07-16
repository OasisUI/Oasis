import { throttle } from './index.js'

export default class ElDraggable {
	constructor (el, config) {
		this.conf = {
			el: el,
			updateStyle: true,
			bubble: false,
			throttle: 0,
			containment: document.body,
			overflow: false,
			updatePosition (e, p) {
				el.style.left = p.left + 'px'
				el.style.top = p.top + 'px'
			}
		}
		this.border = {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
		const { conf, border } = this

		Object.assign(conf, config)

		this.size = {
			width: el.clientWidth,
			height: el.clientHeight
		}
		this.mouseMove = throttle(e => {
			const offsetY = e.clientY - status.clientY
			const offsetX = e.clientX - status.clientX
			status.clientX = e.clientX
			status.clientY = e.clientY
			let left = style.left + offsetX
			let top = style.top + offsetY
			if (!conf.overflow) {
				if (left > border.right) {
					style.left = border.right
				} else if (left < border.left) {
					style.left = border.left
				} else {
					style.left = left
				}
				if (top > border.bottom) {
					style.top = border.bottom
				} else if (top < border.top) {
					style.top = border.top
				} else {
					style.top = top
				}
			} else {
				style.left = left
				style.top = top
			}
			conf.updateStyle && conf.updatePosition(e, style)
			!conf.bubble && e.stopPropagation()
			conf.onDrag && conf.onDrag(e, style, {
				x: offsetX,
				y: offsetY
			})
		}, conf.throttle)

		this.containment = conf.containment

		let style = {
			left: 0,
			top: 0
		}

		let status = {
			dragging: false,
			clientX: null,
			clientY: null
		}
		el.addEventListener('mousedown', e => {
			if (conf.handler) {
				const handler = el.querySelector(conf.handler)
				if (!(handler && handler.contains(e.target))) return
			}
			this.cacheMargin()
			const initPosition = this.getPosition(el.offsetParent, el, this.margin)
			this.updateBorder()
			status.clientX = e.clientX
			status.clientY = e.clientY
			status.dragging = true
			style = initPosition
			document.addEventListener('mousemove', this.mouseMove)
			conf.onStart && conf.onStart(e, style)
			!conf.bubble && e.stopPropagation()
			e.preventDefault()
		})
		document.addEventListener('mouseup', e => {
			if (status.dragging) {
				document.removeEventListener('mousemove', this.mouseMove)
				conf.onEnd && conf.onEnd(e, style)
				status.dragging = false
			}
			e.preventDefault()
		})
	}

	updateBorder () {
		const { size } = this
		const { containment, el } = this.conf
		const offsetParent = el.offsetParent
		const containmentPosition = containment.getBoundingClientRect()
		const offsetParentPosition = offsetParent.getBoundingClientRect()
		const margin = this.getMargin(el)
		this.border.top = containmentPosition.top - offsetParentPosition.top
		this.border.bottom = offsetParentPosition.bottom - size.height - containmentPosition.bottom + containmentPosition.height - margin.bottom - margin.top
		this.border.left = containmentPosition.left - offsetParentPosition.left
		this.border.right = containmentPosition.left + containmentPosition.width - offsetParentPosition.left - size.width - margin.right - margin.left
	}

	getMargin (el) {
		return {
			top: parseInt(getComputedStyle(el)['marginTop']),
			right: parseInt(getComputedStyle(el)['marginRight']),
			bottom: parseInt(getComputedStyle(el)['marginBottom']),
			left: parseInt(getComputedStyle(el)['marginLeft'])
		}
	}

	getPosition (containment, el, margin) {
		const containmentPosition = containment.getBoundingClientRect()
		const elPosition = el.getBoundingClientRect()
		if (margin === void 0) {
			margin = this.getMargin(el)
		}
		return {
			top: elPosition.top - containmentPosition.top - margin.top,
			left: elPosition.left - containmentPosition.left - margin.left
		}
	}

	cacheMargin () {
		this.margin = this.getMargin(this.conf.el)
	}
}
