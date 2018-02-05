export default {
	default () {
		return {
			labelCol: 6,
			wrapperCol: 18
		}
	},
	validator (val) {
		return typeof val === 'object' &&
			typeof val.labelCol === 'number' &&
			typeof val.wrapperCol === 'number'
	}
}
