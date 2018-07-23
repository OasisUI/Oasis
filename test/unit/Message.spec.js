import MessageComponent from '@/message/src'
import Message from '@/message'
import {
	shallowMount,
	createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Message)

describe('Message', () => {
	it('render', () => {
		const wrapper = shallowMount(MessageComponent)
		expect(wrapper.isVueInstance()).toBe(true)
		expect(wrapper.classes()).toContain('o-Message')
	})

	it('text', () => {
		localVue.prototype.$message({
			text: 'message',
			description: 'description'
		})

		expect(document.body.querySelector('.o-MessageBox .o-Message')).toBeDefined()
		expect(document.body.querySelector('.o-MessageBox .o-Message__text').innerHTML).toEqual('message')
		expect(document.body.querySelector('.o-MessageBox .o-Message__desc').innerHTML).toEqual('description')
	})

	it('duration', () => {
		localVue.prototype.$message({
			text: 'message',
			duration: 5
		})
		setTimeout(() => {
			expect(document.body.querySelector('.o-MessageBox .o-Message')).toBeUndefined()
		}, 10)
	})

	it('type', () => {
		localVue.prototype.$message({
			type: 'danger',
			text: 'message',
		})
		expect(document.body.querySelector('.o-Message__content.o-Message--danger')).toBeDefined()
	})

	it('close', () => {
		const $instance = localVue.prototype.$message({
			type: 'danger',
			text: 'message',
		})
		$instance.close(localVue.prototype.$messageQueue)
		expect(document.body.querySelector('.o-Message')).toBeDefined()
	})
})
