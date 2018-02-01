import Vue from 'vue'
import VueRouter from 'vue-router'

import Component from './components'
import Button from './button'
import Input from './Input'
import Grid from './Grid'

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
	},
	{
		path: '/grid',
		component: Grid
	}
]

export default new VueRouter({
	routes
})
