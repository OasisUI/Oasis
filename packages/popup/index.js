import Popup from './src'

export default {
	install (Vue) {
		Vue.directive('popup', {
			bind (el, binding, vnode) {
				vnode.context.$refs[binding.arg].$refs.fuse = el
			}
		})
		Vue.component(Popup.name, Popup)
	}
}
