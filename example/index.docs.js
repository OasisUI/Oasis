import Vue from 'vue'
import Oasis from '../src'
import { router } from './router'

import '../src/theme/index.css'
import './style/example.css'

Vue.use(Oasis)

const app = new Vue({
	router,
	render () {
		return (<router-view></router-view>)
	}
}).$mount('#app')
