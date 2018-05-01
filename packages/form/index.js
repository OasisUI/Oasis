import FormGroup from './src/formGroup'
import FormItem from './src/formItem'

export default {
	install (Vue) {
		Vue.component(FormGroup.name, FormGroup)
		Vue.component(FormItem.name, FormItem)
	}
}
