import Vue from 'vue'
import Oasis from '../src/packages/index'
import router from './router'

import '../lib/theme/index.css'

Vue.use(Oasis)

const app = new Vue({
	router,
	render (createElement) {
		return createElement('router-view')
	}
}).$mount('#app')
