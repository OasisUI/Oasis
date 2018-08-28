import Modal from './src/index'

Modal.install = function (Vue) {
	Vue.component(Modal.name, Modal)
}

export default Modal
