import Upload from './src/index'
import UploadFile from './src/upload'
import InputImage from './src/inputImage'

const components = [
	Upload,
	UploadFile,
	InputImage
]

export default {
	install (Vue) {
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}
