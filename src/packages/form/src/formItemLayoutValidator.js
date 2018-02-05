export default function (val) {
	return typeof val === 'object' &&
		typeof val.labelCol === 'number' &&
		typeof val.wrapperCol === 'number'
}
