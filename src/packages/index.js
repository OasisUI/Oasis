import Vue from 'vue'
// components
import Img from './img'
import Loading from './loading'
import Form from './form'
import Button from './button'
import Grid from './grid'
import Checkbox from './checkbox'
import Input from './input'
import InputNumber from './inputNumber'
import InputText from './inputText'
import Select from './select'
import Radio from './radio'
import Message from './message'
import Modal from './modal'
import ModalBox from './modalBox'
import DatePicker from './datePicker'

// tools
// TODO

const components = [
	Img,
	Loading,
	Form,
	Button,
	Grid,
	Checkbox,
	Input,
	InputNumber,
	InputText,
	Select,
	Radio,
	Message,
	Modal,
	ModalBox,
	DatePicker
];

const Oasis = {
    install (Vue) {
        components.map(component => {
			Vue.use(component)
        });
	}
}

export default Oasis;
