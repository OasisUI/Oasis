import Radio from './src/index'
import RadioBtn from './src/radioBtn'
import RadioGroup from './src/radioGroup'

export default {
	install (Vue) {
		Vue.component(Radio.name, Radio)
		Vue.component(RadioBtn.name, RadioBtn)
		Vue.component(RadioGroup.name, RadioGroup)
	}
}
