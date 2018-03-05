import Vue from 'vue'
import Oasis from '../src/packages/index'
import router from './router'

import '../lib/theme/index.css'
import './style/example.css'

Vue.use(Oasis)

const app = new Vue({
	router,
	render (createElement) {
		return createElement(
			'div',
			{
				class: 'container'
			},
			[
				createElement('router-view')
			]
		)
	}
}).$mount('#app')
