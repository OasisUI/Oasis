import Avatar from './src'

const components = [
	Avatar
]

export default {
	install (Vue) {
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}
