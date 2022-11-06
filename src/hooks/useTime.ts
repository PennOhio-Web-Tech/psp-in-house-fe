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
				monthNum === 1
					? 'Jan'
					: monthNum === 2
					? 'Feb'
					: monthNum === 3
					? 'Mar'
					: monthNum === 4
					? 'Apr'
					: monthNum === 5
					? 'May'
					: monthNum === 6
					? 'June'
					: monthNum === 7
					? 'July'
					: monthNum === 8
					? 'Aug'
					: monthNum === 9
					? 'Sep'
					: monthNum === 10
					? 'Oct'
					: monthNum === 11
					? 'Nov'
					: 'Dec',
		}

		const day = now.getDay()
		const hour = now.getHours() % 12
		const minute = pad(now.getMinutes())
		const second = pad(now.getSeconds())
		const isAm = now.getHours() < 12
		return { year, month, day, hour, minute, second, isAm }
	}

	setTimeout(() => {
		setTime(getTime())
	}, 1000)

	return { time }
}
