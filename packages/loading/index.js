import Vue from 'vue'
import Loading from './src'

const LoadingClass = Vue.extend(Loading)

Loading.install = function (Vue) {
	Vue.component(Loading.name, Loading)

	Vue.prototype.$loading = function (visiable) {
		if (Vue.prototype.$loadingInstance === void (0)) {
			Vue.prototype.$loadingInstance = new LoadingClass({
				el: document.createElement('div'),
				propsData: {
					global: true
				}
			})
		}
		if (Vue.$isServer) return
		document.body.appendChild(Vue.prototype.$loadingInstance.$el)
		Vue.prototype.$loadingInstance.loading(visiable)
	}

	Vue.directive('loading', {
		bind (el, binding, vnode) {
			const loading = new LoadingClass({
				el: document.createElement('div')
			})
			el.__loading = loading
			loading.loading(binding.value)
			el.append(loading.$el)
		},

		update (el, binding) {
			if (binding.value !== binding.oldValue) {
				el.__loading.loading(binding.value)
			}
		}
	})
}

export default Loading
