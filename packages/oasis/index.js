// components
import Img from '@oasis-ui/img'
import Loading from '@oasis-ui/loading'
import Form from '@oasis-ui/form'
import Button from '@oasis-ui/button'
import Grid from '@oasis-ui/grid'
import Checkbox from '@oasis-ui/checkbox'
import Input from '@oasis-ui/input'
import InputNumber from '@oasis-ui/inputnumber'
import Select from '@oasis-ui/select'
import Radio from '@oasis-ui/radio'
import Message from '@oasis-ui/message'
import Modal from '@oasis-ui/modal'
import ModalBox from '@oasis-ui/modalbox'
import DatePicker from '@oasis-ui/datepicker'
import TimePicker from '@oasis-ui/timepicker'
import Upload from '@oasis-ui/upload'
import Progress from '@oasis-ui/progress'
import Popup from '@oasis-ui/popup'
import ScrollBox from '@oasis-ui/scrollbox'
import Pagination from '@oasis-ui/pagination'
import Nav from '@oasis-ui/nav'
import Rahmen from '@oasis-ui/rahmen'
import Avatar from '@oasis-ui/avatar'

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
