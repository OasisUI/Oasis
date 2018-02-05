import Radio from './src/radio'
import RadioGroup from './src/radioGroup'

export default {
	install (Vue) {
		Vue.component(Radio.name, Radio)
		Vue.component(RadioGroup.name, RadioGroup)
	}
}
