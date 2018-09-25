import Loading from '@/loading'
import {
	createInstance,
	destroyInstance
} from '../helper'
import {
	createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Loading)

describe('Loading', () => {
	it('render', () => {
		const wrapper = renderLoading(false)
		expect(wrapper._isVue).toBeTruthy()
		destroyInstance(wrapper)
	})

	it('show', () => {
		const wrapper = renderLoading(true)
		wrapper.$loading(true)
		expect(document.body.querySelector('.o-Loading.is-global')).toBeDefined()
	})
})


function renderLoading (global = false) {
	return createInstance({
		data () {
			return {
				global
			}
		},
		render () {
			return (
				<Loading global={this.global}></Loading>
			)
		}
	})
}
