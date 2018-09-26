import Alert from './src/alert'
import Confirm from './src/confirm'
import Prompt from './src/prompt'
import Vue from 'vue'

const AlertClass = Vue.extend(Alert)
const ConfirmClass = Vue.extend(Confirm)
const PromptClass = Vue.extend(Prompt)

export default {
	install (Vue) {
		;[
			['$alert', AlertClass],
			['$prompt', PromptClass],
			['$confirm', ConfirmClass]
		].forEach(type => {
			Vue.prototype[type[0]] = function (config) {
				if (Vue.prototype.$isServer) return

				return new Promise((resolve, reject) => {
					const el = document.createElement('div')
					document.body.appendChild(el)
					const instance = new type[1]({
						propsData: {
							...config,
							onConfirm: (e) => {
								config.onConfirm && config.onConfirm(e)
								instance.__confirmed__ = true
								resolve(e)
							},
							onClose: (e) => {
								setTimeout(() => {
									instance.$destroy()
								}, 400)
								if (instance.__confirmed__) return
								config.onClose && config.onClose(e)
								config.onCancel && config.onCancel(e)
								reject(e)
							}
						}
					}).$mount(el)
				})
			}
		})
	}
}
