import Vue from 'vue'
// components
import Img from './img'
import Loading from './loading'
import Form from './form'
// tools

const components = [
	Img,
	Loading,
	Form
];

const Oasis = {
    install (Vue) {
        components.map(component => {
			// Vue.component(component.name, component);
			Vue.use(component)
        });
		// Vue.prototype['$message'] = MessageBox
	
		// directive
		// Vue.directive('loading', {
		// 	bind (el, binding, vnode) {
		// 		console.log(vnode)
		// 		console.log(binding.value)
		// 	}
		// })
	}
}

export default Oasis;
