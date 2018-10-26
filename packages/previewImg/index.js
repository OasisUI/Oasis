import PreviewImg from './src'

PreviewImg.install = function (Vue) {
	const PreviewImgClass = Vue.extend(PreviewImg)

	Vue.prototype.$previewImg = function (material) {
		if (Vue.prototype.$isServer) return

		const el = document.createElement('div')

		document.body.appendChild(el)
		new PreviewImgClass({
			propsData: {
				material
			}
		}).$mount(el)
	}
}

export default PreviewImg
