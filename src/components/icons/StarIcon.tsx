import styled from 'styled-components'

type SVGStarProps = { fill?: string }
function SVGStar({ fill = '#F5F4FA' }: SVGStarProps) {
	return (
		<svg
			width="38"
			height="36"
			viewBox="0 0 38 36"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18.6348 0L12.8669 11.6689L0 13.5324L9.31738 22.5836L7.09896 35.4061L18.6348 29.3719L30.1706 35.4061L27.9522 22.5836L37.2695 13.5324L24.4027 11.6689L18.6348 0Z"
				stroke="#648DE5"
				strokeWidth="2"
			/>
		</svg>
	)
}

export const StarIcon = styled(SVGStar)``
