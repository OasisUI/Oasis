import Vue from 'vue'
import VueRouter from 'vue-router'

import Component from './components'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Component
	},
	{
		path: '/components',
		component: Component
	}
]

export default new VueRouter({
	routes
})
