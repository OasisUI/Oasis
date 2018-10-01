import Vue from 'vue'
import { wrap } from 'module';
import Oasis from '@/oasis/index.js'

Vue.use(Oasis)
Vue.component('transition', {
	template: '<div><slot></slot></div>'
})

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
