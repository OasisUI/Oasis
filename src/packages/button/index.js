import Button from './src/index.vue'
import ButtonGroup from './src/buttonGroup.vue'

Button.install = function (Vue) {
	Vue.component(Button.name, Button)
	Vue.component(ButtonGroup.name, ButtonGroup)
}

export default Button
