import Navbar from './src'
import NavGroup from './src/navGroup'
import SideNav from './src/sideNav'
import SubNav from './src/subNav'
import NavItem from './src/navItem'

const components = [
	Navbar,
	NavGroup,
	SideNav,
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
