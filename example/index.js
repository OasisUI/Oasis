import Vue from 'vue'
import Oasis from '../packages/oasis'
import { router } from './router'

import '../theme/index.css'
import './style/example.css'

Vue.use(Oasis)

new Vue({
	router,
	render () {
		return (<router-view></router-view>)
	}
}).$mount('#app')
