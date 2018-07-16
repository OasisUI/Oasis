import PreviewImg from './src'
import Vue from 'vue'

const PreviewImgClass = Vue.extend(PreviewImg)

export default {
	install (ue) {
		Vue.prototype.$previewImg = function (material) {
			if (typeof window === 'undefined') return
			const el = document.createElement('div')
			document.body.appendChild(el)
			new PreviewImgClass({
				propsData: {
					material
				}
			}).$mount(el)
		}
	}
}
