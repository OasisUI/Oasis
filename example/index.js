import Vue from 'vue'
import Oasis from '../src/packages/index'
import Tab from './tab.vue'
import { router } from './router'

import '../lib/theme/index.css'
import './style/example.css'

Vue.use(Oasis)

const app = new Vue({
	router,
	render () {
		return (<router-view></router-view>)
	}
}).$mount('#app')
