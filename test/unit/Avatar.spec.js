import Avatar from '@/avatar'
import Rahmen from '@/rahmen'
import {
	mount,
	createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Rahmen)

describe('Avatar', () => {
	it('render', () => {
		const wrapper = mount(Avatar)
		expect(wrapper.isVueInstance()).toBe(true)
		expect(wrapper.classes()).toContain('o-Avatar')
	})

	it('src', () => {
		const wrapper = mount(Avatar, {
			propsData: {
				src: 'src'
			},
			localVue
		})
		expect(wrapper.find('.o-Rahmen').exists()).toBeTruthy()
	})

	it('name', () => {
		const wrapper = mount(Avatar, {
			propsData: {
				name: 'name'
			},
		})
		expect(wrapper.vm.name).toEqual('name')
	})
})
