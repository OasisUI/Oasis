import Popup from './src'

Popup.install = function (Vue) {
	Vue.directive('popup', {
		bind (el, binding, vnode) {
			vnode.context.$refs[binding.arg].$refs.trigger = el
		}
	})
	Vue.component(Popup.name, Popup)
}

export default Popup
