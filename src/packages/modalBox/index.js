import Alert from './src/alert'
import Vue from 'vue'

const AlertClass = Vue.extend(Alert)

export default {
	install (Vue) {
		Vue.prototype.$alert = function (config) {
			if (typeof window === 'undefined') return
			const el = document.createElement('div')
			document.body.appendChild(el)
			const instance = new AlertClass({
				el: el,
				propsData: config
			})
		}
	}
}
