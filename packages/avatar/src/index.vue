<template>
	<div
		:class="[
			'o-Avatar',
			round ? 'o-Avatar--round' : 'o-Avatar--rect',
			'o-Avatar--' + _size
		]"
		:style="{
			backgroundColor: _bg
		}"
	>
		<Rahmen
			v-if="src"
			:src="src"
			width="100%"
			ratio="1"
		></Rahmen>
		<span
			v-else
			class="o-Avatar__name"
		>{{ name[0] }}</span>
	</div>
</template>

<script>
	import Rahmen from '@oasis-ui/rahmen'

	const props = {
		displayName: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			default: ''
		},
		src: {
			type: String,
			default: ''
		},
		round: {
			type: Boolean,
			default: true
		},
		size: {
			type: String,
			default: 'md'
		}
	}

	let avatarColors = ['#B390DF', '#DF9090', '#64B3DD', '#74BE7F', '#E9BA5F']
	let minorAavatarColors = []

	export default {
		name: 'Avatar',
		props,
		data () {
			return {}
		},
		mounted () {

		},
		computed: {
			group () {
				return this.$parent
			},
			useGroup () {
				return this.group.$options.type === 'avatarGroup'
			},
			_bg () {
				let color = ''
				if (avatarColors.length <= 1) {
					avatarColors = avatarColors.concat(minorAavatarColors)
					minorAavatarColors = []
				}
				color = avatarColors.splice(parseInt(Math.random() * avatarColors.length), 1)
				minorAavatarColors.push(color)
				return color
			},
			_size () {
				return this.useGroup ? this.group.size : this.size
			}
		},
		comments: {
			Rahmen
		}
	}
</script>
