<template>
	<div class="o-TimePicker">
		<div
			@wheel.stop.prevent="updateHour"			
			class="o-TimePicker__currentValue"
		>
			<div
				:style="{
					top: hour * -30 + 'px'
				}"
				class="o-TimePicker__spinnerList"
			>
				<span
					v-for="h in 24"
					:class="{
						'is-selected': hour + 1 === h
					}"
					class="o-TimePicker__spinnerItem"					
				>
					{{h - 1}}
				</span>
			</div>
		</div>
		<div
			@wheel.stop.prevent="updateMinute"			
			class="o-TimePicker__currentValue"
		>
			<div
				:style="{
					top: minute * -30 + 'px'
				}"
				class="o-TimePicker__spinnerList"
			>
				<span
					v-for="m in 60"
					:class="{
						'is-selected':  minute + 1 === m
					}"
					class="o-TimePicker__spinnerItem"					
				>
					{{m - 1}}
				</span>
			</div>
		</div>
		<div
			@wheel.stop.prevent="updateSecond"			
			class="o-TimePicker__currentValue"
		>			
			<div
				:style="{
					top: second * -30 + 'px'
				}"
				class="o-TimePicker__spinnerList"
			>
				<span
					v-for="s in 60"
					:class="{
						'is-selected':  second + 1 === s
					}"
					class="o-TimePicker__spinnerItem"
				>
					{{s - 1}}
				</span>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		throttle
	} from '../../../utils'
	export default {
		name: 'TimePicker',
		data () {
			return {
				hour: 10,
				minute: 20,
				second: 30
			}
		},
		methods: {
			updateHour: throttle(function (e) {
				const deltaY = e.deltaY
				const step = Math.ceil(Math.abs(deltaY / 10))
				// const next = this.hour + step
				console.log(step)
				if (deltaY > 0 && this.hour < 23) {
					if (deltaY > 10 && this.hour + step < 23) {
						this.hour += step
					} else {
						this.hour++
					}
				} else if (deltaY < 0 && this.hour > 0) {
					if (deltaY < -10 && this.hour - step > 0) {
						this.hour -= step
					} else {
						this.hour--
					}
				}
			}, 200),
			updateMinute: throttle(function (e) {
				const deltaY = e.deltaY
				if (deltaY > 0 && this.minute < 59) {
					this.minute++
				} else if (deltaY < 0 && this.minute > 0) {
					this.minute--
				}
			}, 120),
			updateSecond: throttle(function (e) {
				const deltaY = e.deltaY
				console.log(deltaY)
				const second = this.second + deltaY / 10
				if (deltaY > 0 && this.second < 59) {
					this.second += deltaY / 10
				} else if (deltaY < 0 && this.second > 0) {
					this.second += deltaY / 10	
				}
			}, 120)
		}
	}
</script>
