import InputText from './src/text'
import InputNumber from './src/number'

const components = [
	InputText,
	InputNumber
]

export default {
	install (Vue) {
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}
