// components
import Img from '../img'
import Loading from '../loading'
import Form from '../form'
import Button from '../button'
import Grid from '../grid'
import Checkbox from '../checkbox'
import Input from '../input'
import InputNumber from '../inputNumber'
import Select from '../select'
import Radio from '../radio'
import Message from '../message'
import Modal from '../modal'
import ModalBox from '../modalBox'
import DatePicker from '../datePicker'
import TimePicker from '../timePicker'
import DateTimePicker from '../dateTimePicker'
import Upload from '../upload'
import Progress from '../progress'
import Popup from '../popup'
import ScrollBox from '../scrollBox'
import Pagination from '../pagination'
import Nav from '../nav'
import Rahmen from '../rahmen'
import Avatar from '../avatar'
import PreviewImg from '../previewImg'

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
	DateTimePicker,
	Upload,
	Progress,
	Popup,
	ScrollBox,
	Pagination,
	Nav,
	Rahmen,
	Avatar,
	PreviewImg
]

const Oasis = {
	install (Vue) {
		components.map(component => {
			Vue.use(component)
		})
	}
}

export default Oasis
