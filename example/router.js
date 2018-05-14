import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './home'
import Component from './components'
import Button from './components/button'
import Input from './components/input'
import InputNumber from './components/inputNumber'
import Select from './components/select'
import Checkbox from './components/checkbox'
import Radio from './components/radio'
import Grid from './components/grid'
import Form from './components/form'
import Message from './components/message'
import Modal from './components/modal'
import DateTime from './components/datetimepicker'
import Upload from './components/upload'
import Popup from './components/popup'
import ScrollBox from './components/scrollBox'
import Pagination from './components/pagination'
import Navbar from './components/navbar'
import Rahmen from './components/rahmen'
import Avatar from './components/avatar'
import Loading from './components/loading'
import Progress from './components/progress'
import previewImg from './components/previewImg'

Vue.use(VueRouter)

const components = [
	{
		path: 'button',
		component: Button,
		title: {
			zh: '按钮',
			en: 'Button'
		}
	},
	{
		path: 'input',
		component: Input,
		title: {
			zh: '输入框',
			en: 'Input'
		}
	},
	{
		path: 'input-number',
		component: InputNumber,
		title: {
			zh: '数字输入',
			en: 'InputNumber'
		}
	},
	{
		path: 'select',
		component: Select,
		title: {
			zh: '选择器',
			en: 'Select'
		}
	},
	{
		path: 'radio',
		component: Radio,
		title: {
			zh: '单选',
			en: 'Radio'
		}
	},
	{
		path: 'checkbox',
		component: Checkbox,
		title: {
			zh: '复选',
			en: 'Checkbox'
		}
	},
	{
		path: 'grid',
		component: Grid,
		title: {
			zh: '网格',
			en: 'Grid'
		}
	},
	{
		path: 'form',
		component: Form,
		title: {
			zh: '表单',
			en: 'Form'
		}
	},
	{
		path: 'message',
		component: Message,
		title: {
			zh: '消息提示',
			en: 'Message'
		}
	},
	{
		path: 'modal',
		component: Modal,
		title: {
			zh: '模态框',
			en: 'Modal'
		}
	},
	{
		path: 'previewImg',
		component: previewImg,
		title: {
			zh: '图片预览',
			en: 'PreviewImg'
		}
	},
	{
		path: 'datetimepicker',
		component: DateTime,
		title: {
			zh: '日期选择',
			en: 'DateTime'
		}
	},
	{
		path: 'upload',
		component: Upload,
		title: {
			zh: '上传',
			en: 'Upload'
		}
	},
	{
		path: 'popup',
		component: Popup,
		title: {
			zh: '弹框',
			en: 'Popup'
		}
	},
	{
		path: 'scrollbox',
		component: ScrollBox
	},
	{
		path: 'pagination',
		component: Pagination,
		title: {
			zh: '分页',
			en: 'Pagination'
		}
	},
	{
		path: 'navbar',
		component: Navbar,
		title: {
			zh: '导航',
			en: 'Navigator'
		}
	},
	{
		path: 'rahmen',
		component: Rahmen,
		title: {
			zh: '相框',
			en: 'Rahmen'
		}
	},
	{
		path: 'avatar',
		component: Avatar,
		title: {
			zh: '头像',
			en: 'Avatar'
		}
	},
	{
		path: 'loading',
		component: Loading,
		title: {
			zh: '加载动画',
			en: 'Loading'
		}
	},
	{
		path: 'progress',
		component: Progress,
		title: {
			zh: '进度条',
			en: 'Progress'
		}
	}
]

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/components',
		component: Component,
		children: components.concat([
			{
				path: '',
				component: Button
			},
			{
				path: '*',
				component: Button
			}
		])
	}
]

export const router = new VueRouter({
	routes
})

export { components }
