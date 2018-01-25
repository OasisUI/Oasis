import Vue from 'vue'
import VueRouter from 'vue-router'

import Component from './components'
import Button from './button'

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
	}
]

export default new VueRouter({
	routes
})
