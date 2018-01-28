import Vue from 'vue'
// components
import Img from './img'
import Loading from './loading'
import Form from './form'
import Button from './button'
import Input from './input'
// tools

const components = [
	Img,
	Loading,
	Form,
	Button,
	Input
];

const Oasis = {
    install (Vue) {
        components.map(component => {
			Vue.use(component)
        });
	}
}

export default Oasis;
