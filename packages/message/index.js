import Vue from 'vue'
import Message from './src'

const Msg = Vue.extend(Message)
const maxQueueLength = 3

export default {
	install (Vue) {
		if (Vue.prototype.$isServer) return

		const messageBox = document.createElement('div')
		messageBox.setAttribute('class', 'o-MessageBox')
		document.body.appendChild(messageBox)
		Vue.prototype.$messageBox = messageBox
		Vue.prototype.$messageQueue = []

		Vue.prototype.$message = function (config) {
			const queue = Vue.prototype.$messageQueue
			const $messageBox = Vue.prototype.$messageBox

			if (typeof $messageBox === 'undefined') return

			const el = document.createElement('div')
			if ($messageBox.children.length) {
				$messageBox.insertBefore(el, $messageBox.children[0])
			} else {
				$messageBox.appendChild(el)
			}
			const instance = new Msg({
				propsData: config
			}).$mount(el)
			queue.unshift(instance)

			if (queue.length > maxQueueLength) {
				queue[queue.length - 1].close(queue)
			}
			config.duration !== 0 && setTimeout(() => {
				instance.close(queue)
			}, config.duration || 3000)

			return instance
		}

		;['info', 'success', 'danger', 'warning'].forEach(type => {
			Vue.prototype.$message[type] = function (text = '', config = {}) {
				Vue.prototype.$message({
					type,
					text,
					...config
				})
			}
		})
	}
}
