<script>
	import PopupBox from './popupBox'
	import Vue from 'vue'
	import { elOffset } from '../../../utils'

	const props = {
		title: String,
		content: String,
		action: String,
		fuse: Object
	}
	export default {
		name: 'Popup',
		props,
		data () {
			return {
				show: false,
				style: {
					left: 0,
					top: 0
				}
			}
		},
		beforeDestroy () {
			const fuse = this.$refs.fuse
			if (fuse) {
				fuse.removeEventListener(this.action, this.togglePopup)
			}
		},
		mounted () {
			const fuse = this.$refs.fuse
			if (fuse) {
				fuse.addEventListener(this.action, this.togglePopup)
			}
			if (!this.$isServer) {
				const body = document.body
				let popupList = body.querySelector('o-PopupList')
				if (!popupList) {
					popupList = document.createElement('div')
					popupList.setAttribute('class', 'o-PopupList')
					body.appendChild(popupList)
				}
				popupList.appendChild(this.$el)
			}
		},
		render () {
			const slot = this.$slots.default
			const content = slot ?
				slot : (
					<div>{this.content}</div>
				)
			return (
				<transition name="o-Popup">
					<div
						v-show={this.show}
						class="o-Popup"
						style={this.style}
					>
						<span class="o-Popup__title">
							{this.title}
						</span>
						<section class="o-Popup__content">
							{content}
						</section>
						<span class="o-Popup__arrow"></span>
					</div>
				</transition>
			)

		},
		methods: {
			togglePopup () {
				this.show = !this.show
				const fuse = this.$refs.fuse
				if (this.show && !this.$isServer) {
					const p = elOffset(fuse)
					const size = fuse.getBoundingClientRect()
					this.style.top = `${p.y + size.y}px`
					this.style.left = `${p.x + size.x / 2}px`
				}
			}
		},
		watch: {
			fuse: {
				handler (val) {
					if (val instanceof Vue) {
						val.$on('click', this.togglePopup)
					}
				},
				immediate: true
			}
		},
		components: {
			PopupBox
		}
	}
</script>
