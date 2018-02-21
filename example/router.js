import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './Home'
import Component from './components'
import Button from './button'
import Input from './input'
import Grid from './grid'
import Form from './form'
import Message from './message'
import Modal from './modal'
import DateTime from './datetimepicker'
import Upload from './upload'

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
	}
]

export default new VueRouter({
	routes
})
