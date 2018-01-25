import Vue from 'vue'
import Oasis from '../src/packages/index'
import router from './router'

import '../src/theme/common/_base.css'
import '../src/theme/common/_animation.css';
import '../src/theme/src/img.css'
import '../src/theme/src/loading.css'
import '../src/theme/src/form.css'
import '../src/theme/src/button.css';

Vue.use(Oasis)

const app = new Vue({
	router,
	render (createElement) {
		return createElement('router-view')
	}
}).$mount('#app')
