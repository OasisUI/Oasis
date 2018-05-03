/**
 * Create by joe223
 * https://github.com/joe223/resizing
 */
export default class Resizing {
	constructor (el) {
		this.el = el
		this.listeners = []
		this.load = false
		this.box = document.createElement('iframe')
		this.box.setAttribute('style', 'position: absolute; overflow: hidden; opacity: 0; pointer-events: none; left: 0; top: 0; z-index: -9999; width: 100%; height: 100%; border: none;')
		this.box.onload = e => {
			this.load = true
			this.bindListener()
		}
		this.el.appendChild(this.box)
	}
	bindListener () {
		const len = this.listeners.length
		for (let i = 0; i < len; i++) {
			this.box.contentDocument.defaultView.addEventListener('resize', this.listeners.shift())
		}
	}
	on (cb) {
		if (this.load) {
			this.box.contentDocument.defaultView.addEventListener('resize', cb)
		} else {
			this.listeners.push(cb)
		}
	}
	off (cb) {
		this.box.contentDocument.defaultView.removeEventListener('resize', cb)
	}
	destroy () {
		this.el.removeChild(this.box)
		// TODO: remove eventListener ?
		this.el = null
		this.box = null
	}
}
