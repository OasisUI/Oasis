<template>
	<div
		:class="[
			'o-Avatar',
			round ? 'o-Avatar--round' : 'o-Avatar--rect',
			'o-Avatar--' + _size
		]"
	>
		<div
			class="o-Avatar__imgWrapper"
		>
			<Rahmen
				v-if="src"
				:src="src"
				width="100%"
				ratio="1"
				type="fillMin"
			></Rahmen>
			<span
				v-else
				class="o-Avatar__name"
				:style="{
					backgroundColor: _bg
				}"
			>{{computedName}}</span>
		</div>
		<div
			v-if="$slots.default"
			class="o-Avatar__addon"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import Rahmen from '@oasis-ui/rahmen/src'

	const props = {
		displayName: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			default: ''
		},
		defaultName: {
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

	let avatarColors = ['#F9C872', '#A882AE', '#74AC9C', '#396483', '#E17474', '#8AA1C3', '#82C8D2', '#F3D9C3', '#4F98A1', '#F999C5']

	// ['#B390DF', '#DF9090', '#64B3DD', '#74BE7F', '#E9BA5F']
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
			computedName () {
				const {
					name,
					defaultName
				} = this
				return (name || defaultName).slice(0, 2)
			},
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
