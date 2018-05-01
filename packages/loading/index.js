import Vue from 'vue'
import Loading from './src'

const L = Vue.extend(Loading)

export default {
	install (Vue) {
		Vue.component(Loading.name, Loading)
		Vue.directive('loading', {
			bind (el, binding, vnode) {
				const loading = new L({
					el: document.createElement('div')
				})
				el.__loading = loading
				display(loading.$el, binding.value)
				el.append(loading.$el)
			},
			update (el, binding) {
				if (binding.value !== binding.oldValue) {
					display(el.__loading.$el, binding.value)
				}
			}
		})

		function display ($el, visiable) {
			if (visiable === true) {
				$el.style.display = 'block'
			} else {
				$el.style.display = 'none'
			}
		}
	}
}
