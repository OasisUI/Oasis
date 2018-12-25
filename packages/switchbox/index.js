import Switchbox from './src/index'

Switchbox.install = function (Vue) {
	Vue.component(Switchbox.name, Switchbox)
}

export default Switchbox
