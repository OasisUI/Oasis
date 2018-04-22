import Navbar from './src'
import SubNav from './src/subNav'
import NavItem from './src/navItem'

const components = [
	Navbar,
	SubNav,
	NavItem
]

export default {
	install (Vue) {
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}
