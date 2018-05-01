import Alert from './src/alert'
import Confirm from './src/confirm'
import Prompt from './src/prompt'

import Vue from 'vue'

const AlertClass = Vue.extend(Alert)
const ConfirmClass = Vue.extend(Confirm)
const PromptClass = Vue.extend(Prompt)

export default {
	install (Vue) {
		Vue.prototype.$alert = function (config) {
			if (typeof window === 'undefined') return
			const el = document.createElement('div')
			document.body.appendChild(el)
			new AlertClass({
				propsData: config
			}).$mount(el)
		}
		Vue.prototype.$confirm = function (config) {
			if (typeof window === 'undefined') return
			const el = document.createElement('div')
			document.body.appendChild(el)
			new ConfirmClass({
				propsData: config
			}).$mount(el)
		}
		Vue.prototype.$prompt = function (config) {
			if (typeof window === 'undefined') return
			const el = document.createElement('div')
			document.body.appendChild(el)
			new PromptClass({
				propsData: config
			}).$mount(el)
		}
	}
}
