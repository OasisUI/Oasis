// components
import Img from '../img'
import Loading from '../loading'
import Form from '../form'
import Button from '../button'
import Grid from '../grid'
import Checkbox from '../checkbox'
import CheckboxGroup from '../checkboxGroup'
import Input from '../input'
import Candidate from '../candidate'
import InputNumber from '../inputNumber'
import Select from '../select'
import Radio from '../radio'
import RadioBtn from '../radioBtn'
import RadioGroup from '../radioGroup'
import Message from '../message'
import Modal from '../modal'
import ModalBox from '../modalBox'
import DatePicker from '../datePicker'
import TimePicker from '../timePicker'
import DateTimePicker from '../dateTimePicker'
import DateRangePicker from '../dateRangePicker'
import Upload from '../upload'
import Progress from '../progress'
import Popup from '../popup'
import ScrollBox from '../scrollBox'
import Pagination from '../pagination'
import Nav from '../nav'
import Rahmen from '../rahmen'
import Avatar from '../avatar'
import AvatarGroup from '../avatarGroup'
import PreviewImg from '../previewImg'
import Table from '../table'
import Cascader from '../cascader'

// tools
// TODO

const components = [
	Img,
	Loading,
	Form,
	Button,
	Grid,
	Checkbox,
	CheckboxGroup,
	Input,
	Candidate,
	InputNumber,
	Select,
	Radio,
	RadioBtn,
	RadioGroup,
	Message,
	Modal,
	ModalBox,
	DatePicker,
	TimePicker,
	DateTimePicker,
	DateRangePicker,
	Upload,
	Progress,
	Popup,
	ScrollBox,
	Pagination,
	Nav,
	Rahmen,
	Avatar,
	AvatarGroup,
	PreviewImg,
	Table,
	Cascader
]

const Oasis = {
	components,
	install (Vue) {
		components.map(component => {
			Vue.use(component)
		})
	}
}

export default Oasis
