import { elOffset } from '../../../utils'

const props = {
	title: String,
	content: String,
	trigger: Object,
	nested: Boolean,
	position: {
		type: String,
		default: 'bottom'
	},
	action: {
		type: String,
		default: 'click'
	},
	showArrow: {
		type: Boolean,
		default: true
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
		const trigger = this.$refs.trigger
		if (trigger) {
			trigger.removeEventListener(this.action, this.showPopup)
			document.removeEventListener('click', this.hidePopup)
		}
		this.remove()
	},
	mounted () {
		const trigger = this.$refs.trigger
		if (trigger) {
			trigger.addEventListener(this.action, this.showPopup)
			document.addEventListener('click', this.hidePopup)
		}
		!this.nested && this.mount()
	},
	render () {
		const {
			show,
			style,
			title,
			content,
			showArrow
		} = this
		const slot = this.$slots.default

		return (
			<div
				class={['o-Popup', showArrow ? 'o-Popup--arrow' : '']}
				style={style}
			>
				<transition name='o-Popup'>
					<div
						v-show={show}
						class='o-Popup__inner'
					>
						<span class='o-Popup__title'>
							{title}
						</span>
						<section class='o-Popup__content'>
							{slot || content}
						</section>
						<span
							v-show={showArrow}
							class='o-Popup__arrow'
						></span>
					</div>
				</transition>
			</div>
		)
	},
	methods: {
		showPopup () {
			this.show = !this.show
			const trigger = this.$refs.trigger
			if (!this.show || this.$isServer || this.nested) return
			this.$nextTick(() => {
				const p = elOffset(trigger)
				const triggerSize = trigger.getBoundingClientRect()
				const elSize = this.$el.getBoundingClientRect()
				this.style.top = `${p.y + triggerSize.height}px`
				this.style.left = `${p.x + triggerSize.width / 2 - elSize.width / 2}px`
			})
		},
		hidePopup (e) {
			if (this.$el.contains(e.target) || this.$refs.trigger.contains(e.target)) return
			this.show = false
		},
		remove () {
			if (this.$isServer) return
			const body = document.body
			let popupList = body.querySelector('.o-PopupList')
			popupList && popupList.removeChild(this.$el)
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
