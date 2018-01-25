import Vue from 'vue'
// components
import Img from './img'
import Loading from './loading'
import Form from './form'
import Button from './button'
// tools

const components = [
	Img,
	Loading,
	Form,
	Button
];

const Oasis = {
    install (Vue) {
        components.map(component => {
			Vue.use(component)
        });
	}
}

export default Oasis;
