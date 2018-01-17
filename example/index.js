import Vue from 'vue'
import App from './App'
import Oasis from '../src/packages/index'
import '../src/theme/index.scss'

Vue.use(Oasis)

new Vue({
	render (createElement) {
		return createElement(App)
	}
}).$mount('#app')
