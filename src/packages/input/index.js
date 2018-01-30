import InputText from './src/text'
import InputNumber from './src/number'
import InputSelect from './src/select'
import InputCheckbox from './src/checkbox'
import InputRadio from './src/radio'
import RadioGroup from './src/radioGroup'

const components = [
	InputText,
	InputNumber,
	InputSelect,
	InputCheckbox,
	InputRadio,
	RadioGroup
]

export default {
	install (Vue) {
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}
