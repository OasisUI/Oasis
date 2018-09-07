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
		value: {
			type: Number
		},
		format: {
			type: String,
			default: 'HH:mm:ss'
		}
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

		methods: {
			updateValue () {
				const {
					value,
					time
				} = this
				const date = dateWrapper(value)
				const val = dateWrapper({

					// get function can not be used for
					// Destructuring assignment
					year: date.year,
					month: date.month - 1,
					date: date.date,
					...time
				})

				this.$emit('input', val.time)
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
			},

			value: {
				handler (value) {
					const time = dateWrapper(value)
					if (time.isValid() && dateWrapper(this.time).time !== time.time) {
						this.time = {
							year: time.year,
							month: time.month - 1,
							date: time.date,
							hour: time.hour,
							minute: time.minute,
							second: time.second,
						}
					}
				},
				immediate: true
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
