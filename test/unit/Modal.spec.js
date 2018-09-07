import Modal from '@/modal'
import ModalBox from '@/modalBox'
import {
	shallowMount,
	createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(ModalBox)

describe('Modal', () => {
	it('render', (done) => {
		const wrapper = shallowMount(Modal, {
			slots: {
				header: ['<span>header</span>'],
				default: ['<span>default</span>'],
				footer: ['<span>footer</span>'],
			}
		})
		expect(wrapper.isVueInstance).toBeTruthy()
		expect(wrapper.classes()).toContain('o-Modal')
		setTimeout(() => {
			expect(wrapper.find('.o-Modal__header').text()).toEqual('header')
			expect(wrapper.find('.o-Modal__body').text()).toEqual('default')
			expect(wrapper.find('.o-Modal__footer').text()).toEqual('footer')
			done()
		}, 10)
	})

	it('click cover to close Modal', () => {
		const wrapper = shallowMount(Modal)
		expect(wrapper.isVisible()).toBeTruthy()
		wrapper.trigger('click')
		expect(wrapper.isEmpty()).toBeTruthy()
	})

	it('click button to close Modal', () => {
		const wrapper = shallowMount(Modal)
		expect(wrapper.isVisible()).toBeTruthy()
		wrapper.find('.o-Modal__close').trigger('click')
		expect(wrapper.isEmpty()).toBeTruthy()
	})

	it('hide close button', () => {
		const wrapper = shallowMount(Modal, {
			propsData: {
				showCloseBtn: false
			}
		})
		expect(wrapper.find('.o-Modal__close').exists()).toBeFalsy()
	})

	it('alert', (done) => {
		let result = 'result'
		localVue.prototype.$alert({
			type: 'danger',
			title: 'title',
			content: 'content',
			confirmText: 'confirmText'
		}).then(res => {
			result = true
		}).catch(err => {
			result = false
		})
		document.body.querySelector('.o-Modal.is-danger .o-ModalBox__confirmBtn').click()
		expect(result).toBe('result')
		setTimeout(() => {
			expect(result).toBe(true)
			document.body.removeChild(document.body.querySelector('.o-Modal'))
			done()
		}, 10)
	})

	it('confirm', (done) => {
		let result = 'result'
		localVue.prototype.$confirm({
			title: 'title',
			content: 'content',
			confirmText: 'confirmText'
		}).then(res => {
			result = true
		}).catch(err => {
			result = false
		})
		document.body.querySelector('.o-Modal .o-ModalBox__confirmBtn').click()
		expect(result).toBe('result')
		setTimeout(() => {
			expect(result).toBe(true)
			document.body.removeChild(document.body.querySelector('.o-Modal'))
			done()
		}, 10)
	})

	it('prompt', () => {
		jest.useFakeTimers()
		let result = 'result'
		localVue.prototype.$prompt({
			title: 'title',
			content: 'content',
			confirmText: 'confirmText'
		}).then(res => {
			expect(res).toEqual('value')
			document.body.removeChild(document.body.querySelector('.o-Modal'))
		}).catch(err => {})
		const $input = document.body.querySelector('.o-Modal input')
		$input.value = 'value'
		$input.dispatchEvent(new Event('input'))
		expect(result).toBe('result')
		setTimeout(() => {
			document.body.querySelector('.o-Modal .o-ModalBox__confirmBtn').click()
			expect(result).toEqual('result')
		}, 10)
		jest.runAllTimers()
	})
})
