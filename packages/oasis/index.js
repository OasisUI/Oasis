// components
import Img from '@oasisui/img'
import Loading from '@oasisui/loading'
import Form from '@oasisui/form'
import Button from '@oasisui/button'
import Grid from '@oasisui/grid'
import Checkbox from '@oasisui/checkbox'
import Input from '@oasisui/input'
import InputNumber from '@oasisui/inputnumber'
import Select from '@oasisui/select'
import Radio from '@oasisui/radio'
import Message from '@oasisui/message'
import Modal from '@oasisui/modal'
import ModalBox from '@oasisui/modalbox'
import DatePicker from '@oasisui/datepicker'
import TimePicker from '@oasisui/timepicker'
import Upload from '@oasisui/upload'
import Progress from '@oasisui/progress'
import Popup from '@oasisui/popup'
import ScrollBox from '@oasisui/scrollbox'
import Pagination from '@oasisui/pagination'
import Nav from '@oasisui/nav'
import Rahmen from '@oasisui/rahmen'
import Avatar from '@oasisui/avatar'

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
	Select,
	Radio,
	Message,
	Modal,
	ModalBox,
	DatePicker,
	TimePicker,
	Upload,
	Progress,
	Popup,
	ScrollBox,
	Pagination,
	Nav,
	Rahmen,
	Avatar
]

const Oasis = {
	install (Vue) {
		components.map(component => {
			Vue.use(component)
		})
	}
}

export default Oasis
