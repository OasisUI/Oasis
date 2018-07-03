import Popup from '@oasis-ui/popup'

export default {
	name: 'Candidate',
	render () {
		const slots = this.$slots.default
		const props = this.$props

		return (
			{slots}
			<Popup {...props}></Popup>
		)

	}
}
