import { useTime } from '@src/hooks/useTime'
import { TimeContainer } from './Clock.styles'

export function Clock() {
	const { time } = useTime()
	return (
		<TimeContainer direction="column" justifyContent="flex-start">
			<p id="one">
				{time.day} {time.month.text} {time.year}
			</p>
			<h3 id="two">
				{time.hour}:{time.minute}:{time.second} {time.isAm ? 'AM' : 'PM'}
			</h3>
		</TimeContainer>
	)
}
