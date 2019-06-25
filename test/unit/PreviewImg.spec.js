import PreviewImg from '@/previewImg/index.js'
import {
	mount,
	shallowMount,
	createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(PreviewImg)

describe('PreviewImg', () => {
	it('render', () => {
		const wrapper = shallowMount(PreviewImg)

		expect(wrapper.isVueInstance()).toBe(true)
		expect(wrapper.find('.o-PreviewImg__list').exists()).toBeTruthy()
	})

	it('display image', done => {
		const images = [
			'https://camo.githubusercontent.com/87882cd6c816edb053cfb6e3c7f0d8ab0af4aae3/68747470733a2f2f63646e2e7261776769742e636f6d2f6a6f653232332f4f617369732f6465762f69636f6e2f69636f6e2e7376673f73616e6974697a653d74727565',
			'https://cloud.githubusercontent.com/assets/848515/21667899/c46e1fba-d337-11e6-9f9b-62a28deb6d32.png'
		]
		const instance = localVue.prototype.$previewImg({
			current: 1,
			images
		})

		setTimeout(() => {
			const el = document.body.querySelector('.o-PreviewImg')

			expect(el).toBeDefined()
			expect(el.querySelector('.o-PreviewImg__img img').src).toEqual(images[1])
			document.body.removeChild(instance.$el)
			done()
		}, 10)
	})

	it('change image', done => {
		const images = [
			'https://camo.githubusercontent.com/87882cd6c816edb053cfb6e3c7f0d8ab0af4aae3/68747470733a2f2f63646e2e7261776769742e636f6d2f6a6f653232332f4f617369732f6465762f69636f6e2f69636f6e2e7376673f73616e6974697a653d74727565',
			'https://cloud.githubusercontent.com/assets/848515/21667899/c46e1fba-d337-11e6-9f9b-62a28deb6d32.png'
		]
		const instance = localVue.prototype.$previewImg({
			current: 1,
			images
		})

		setTimeout(() => {
			const el = document.body.querySelector('.o-PreviewImg')

			el.querySelector('.o-PreviewImg__next').click()
			setTimeout(() => {
				expect(el.querySelector('.o-PreviewImg__img img').src).toEqual(images[0])
				document.body.removeChild(instance.$el)
				done()
			}, 10)
		}, 10)
	})
})
