import InputText from './src/text'

const components = [
	InputText
]

export default {
	install (Vue) {
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}
