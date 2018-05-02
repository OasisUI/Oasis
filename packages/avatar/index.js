import Avatar from './src'
import AvatarGroup from './src/avatarGroup'

const components = [
	Avatar,
	AvatarGroup
]

export default {
	install (Vue) {
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}
