import Col from './src/Col'
import Row from './src/Row'

const components = [
	Col,
	Row
]

export default {
	install (Vue) {
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}
