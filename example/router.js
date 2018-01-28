import Vue from 'vue'
import VueRouter from 'vue-router'

import Component from './components'
import Button from './button'
import Input from './Input'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Component
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
	}
]

export default new VueRouter({
	routes
})
