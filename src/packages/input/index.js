import InputText from './src/text'
import InputNumber from './src/number'
import InputSelect from './src/select'

const components = [
	InputText,
	InputNumber,
	InputSelect
]

export default {
	install (Vue) {
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}
