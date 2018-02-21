import Vue from 'vue'
import Message from './src/message'

const Msg = Vue.extend(Message)
const maxQueueLength = 3

export default {
	install (Vue) {
		if (typeof window !== 'undefined') {
			const messageBox = document.createElement('div')
			messageBox.setAttribute('class', 'o-MessageBox')
			document.body.appendChild(messageBox)
			Vue.prototype.$messageBox = messageBox
			Vue.prototype.$messageQueue = []
		}

		Vue.prototype.$message = function (config) {
			const queue = Vue.prototype.$messageQueue
			const $messageBox = Vue.prototype.$messageBox

			if (typeof $messageBox === 'undefined') return

			const el = document.createElement('div')
			$messageBox.appendChild(el)
			const instance = new Msg({
				propsData: config
			}).$mount(el)
			queue.push(instance)

			if (queue.length > maxQueueLength) {
				queue[0].close()
			}
			config.duration !== 0 && setTimeout(() => {
				instance.close()
			}, config.duration || 3000)

			return instance
		}
	}
}
