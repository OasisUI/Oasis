<script>
	import { elOffset } from '../../../utils'

	const props = {
		title: String,
		content: String,
		action: String,
		fuse: Object,
		position: {
			type: String,
			default: 'bottom'
		}
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
				document.removeEventListener('click', this.hidePopup)
			}
			this.remove()
		},
		mounted () {
			const fuse = this.$refs.fuse
			if (fuse) {
				fuse.addEventListener(this.action, this.togglePopup)
				document.addEventListener('click', this.hidePopup)
			}
			this.mount()
		},
		render () {
			const slot = this.$slots.default
			const content = slot ?
				slot : (
					<div>{this.content}</div>
				)
			return (
					<div
						class="o-Popup"
						style={this.style}	
					>
						<transition name="o-Popup">
							<div
								v-show={this.show}
								class="o-Popup__inner"
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
				</div>
			)
		},
		methods: {
			togglePopup () {
				this.show = !this.show
				const fuse = this.$refs.fuse
				if (!this.show || this.$isServer) return
				this.$nextTick(() => {
					const p = elOffset(fuse)
					const fuseSize = fuse.getBoundingClientRect()
					const elSize = this.$el.getBoundingClientRect()
					this.style.top = `${p.y + fuseSize.height}px`
					this.style.left = `${p.x + fuseSize.width / 2 - elSize.width / 2}px`
				})
			},
			hidePopup (e) {
				if (this.$el.contains(e.target) || this.$refs.fuse.contains(e.target)) return
				this.show = false
			},
			remove () {
				if (this.$isServer) return
				const body = document.body
				let popupList = body.querySelector('.o-PopupList')
				popupList.removeChild(this.$el)
			},
			mount () {
				if (this.$isServer) return
				const body = document.body
				let popupList = body.querySelector('.o-PopupList')
				if (!popupList) {
					popupList = document.createElement('div')
					popupList.setAttribute('class', 'o-PopupList')
					body.appendChild(popupList)
				}
				popupList.appendChild(this.$el)
			}
		}
	}
</script>
