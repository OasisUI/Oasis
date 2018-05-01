import Rahmen from './src'

const components = [
	Rahmen
]

export default {
	install (Vue) {
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}
