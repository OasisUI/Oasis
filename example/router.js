import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/home'
import Component from './components/components'
import Button from './components/button'
import Input from './components/input'
import Grid from './components/grid'
import Form from './components/form'
import Message from './components/message'
import Modal from './components/modal'
import DateTime from './components/datetimepicker'
import Upload from './components/upload'
import Popup from './components/popup'
import ScrollBox from './components/scrollBox'
import Pagination from './components/pagination'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/components',
		component: Component
	},
	{
		path: '/button',
		component: Button
	},
	{
		path: '/input',
		component: Input
	},
	{
		path: '/grid',
		component: Grid
	},
	{
		path: '/form',
		component: Form
	},
	{
		path: '/message',
		component: Message
	},
	{
		path: '/modal',
		component: Modal
	},
	{
		path: '/datetimepicker',
		component: DateTime
	},
	{
		path: '/upload',
		component: Upload
	},
	{
		path: '/popup',
		component: Popup
	},
	{
		path: '/scrollbox',
		component: ScrollBox
	},
	{
		path: '/pagination',
		component: Pagination
	}
]

export default new VueRouter({
	routes
})
