import Checkbox from './src/index'
import CheckboxGroup from './src/checkboxGroup'

export default {
	install (Vue) {
		Vue.component(Checkbox.name, Checkbox)
		Vue.component(CheckboxGroup.name, CheckboxGroup)
	}
}
