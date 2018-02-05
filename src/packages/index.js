import Vue from 'vue'
// components
import Img from './img'
import Loading from './loading'
import Form from './form'
import Button from './button'
import Input from './input'
import Grid from './grid'
import Checkbox from './checkbox'
import InputNumber from './inputNumber'
import InputText from './inputText'
import Select from './select'
import Radio from './radio'

// tools
// TODO

const components = [
	Img,
	Loading,
	Form,
	Button,
	Input,
	Grid,
	Checkbox,
	InputNumber,
	InputText,
	Select,
	Radio
];

const Oasis = {
    install (Vue) {
        components.map(component => {
			Vue.use(component)
        });
	}
}

export default Oasis;
