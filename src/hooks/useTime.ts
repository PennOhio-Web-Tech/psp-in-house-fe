import { useState } from 'react'

export function useTime() {
	function pad(d: number) {
		return d < 10 ? '0' + d.toString() : d.toString()
	}

	const [time, setTime] = useState(getTime())

	function getTime() {
		const now = new Date()
		const year = now.getFullYear()
		const monthNum = now.getMonth()
		const month = {
			num: monthNum,
			text:
				monthNum === 0
					? 'Jan'
					: monthNum === 1
					? 'Feb'
					: monthNum === 2
					? 'Mar'
					: monthNum === 3
					? 'Apr'
					: monthNum === 4
					? 'May'
					: monthNum === 5
					? 'June'
					: monthNum === 6
					? 'July'
					: monthNum === 7
					? 'Aug'
					: monthNum === 8
					? 'Sep'
					: monthNum === 9
					? 'Oct'
					: monthNum === 10
					? 'Nov'
					: 'Dec',
		}

		const day = now.getDate()
		const hour = now.getHours() % 12
		const minute = pad(now.getMinutes())
		const second = pad(now.getSeconds())
		const isAm = now.getHours() < 2

		return { year, month, day, hour, minute, second, isAm }
	}

	setTimeout(() => {
		if (time.hour === 0) {
			document.getElementById(
				'one'
			)!.innerText = `${time.day} ${time.month.text} ${time.year}`
			document.getElementById('two')!.innerText = `12:${time.minute}:${time.second} ${
				time.isAm ? 'AM' : 'PM'
			}`
		} else {
			document.getElementById(
				'one'
			)!.innerText = `${time.day} ${time.month.text} ${time.year}`
			document.getElementById('two')!.innerText = `${time.hour}:${time.minute}:${
				time.second
			} ${time.isAm ? 'AM' : 'PM'}`
		}

		setTime(getTime())
	}, 1000)

	return { time }
}
