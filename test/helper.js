import Vue from 'vue'
import { wrap } from 'module';
const Oasis = require('../packages/oasis/index.js')		// TODO: import Oasis from '../packages/oasis'

Vue.use(Oasis.default)

export function createInstance (co) {
	return new Vue(co).$mount(createEl())
}

export function destroyInstance (wrapper) {
	document.body.removeChild(wrapper.$el)
	wrapper.$destroy()
}

export function createEl () {
	const $el = document.createElement('div')
	document.body.appendChild($el)
	return $el
}

export function querySelector (scheme, root = document.body) {
	return root.querySelectorAll(scheme)
}
