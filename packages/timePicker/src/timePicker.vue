<template>
	<div class="o-TimePicker">
		<div
			v-show="visiable.hour"
			class="o-TimePicker__currentValue"
		>
			<TimeSpinner
				:list="24"
				v-model="time.hour"
			></TimeSpinner>
		</div>
		<div
			v-show="visiable.minute"
			class="o-TimePicker__currentValue"
		>
			<TimeSpinner
				:list="60"
				v-model="time.minute"
			></TimeSpinner>
		</div>
		<div
			v-show="visiable.second"
			class="o-TimePicker__currentValue"
		>
			<TimeSpinner
				:list="60"
				v-model="time.second"
			></TimeSpinner>
		</div>
	</div>
</template>
<script>
	import moment from 'moment'
	import Spinner from './spinner'
	import { dateWrapper } from 'utils/date'

	const props = {
		value: Number,
		format: String
	}

	export default {
		name: 'TimePicker',

		props,

		data () {
			return {
				time: {
					hour: 0,
					minute: 0,
					second: 0
				}
			}
		},

		mounted () {
			this.$nextTick(() => {
				const time = dateWrapper(this.value)
				this.time = {
					hour: time.hour,
					minute: time.minute,
					second: time.second
				}
			})
		},

		methods: {
			updateValue () {
				this.$emit('input', dateWrapper(this.time).time)
			}
		},

		components: {
			[Spinner.name]: Spinner
		},

		watch: {
			time: {
				handler () {
					this.updateValue()
				},
				deep: true
			}
		},

		computed: {
			visiable () {
				const visiable = {}
				this.format.split('').forEach(key => {
					key = moment.normalizeUnits(key)
					if (key) {
						visiable[key] = true
					}
				})
				return visiable
			}
		}
	}
</script>
