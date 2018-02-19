<template>
	<ul class="doc">
		<li>
			<h1>DatePicker</h1>
		</li>
		<li>
			<Input
				v-model="date"
			/>
			<DatePicker
				v-model="date"
			></DatePicker>
		</li>
		<li>
			<Input
				v-model="time"
			/>
			<TimePicker
				v-model="time"
			></TimePicker>
		</li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				date: + new Date(),
				time: '12:00'
			}
		}
	}
</script>
