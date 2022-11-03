import { SVGIconProps } from '@src/@types'
import { forwardRef } from 'react'

export const CheckmarkIcon = forwardRef<SVGSVGElement>(
	({ fill = '##000000', ...props }: SVGIconProps, ref) => {
		return (
			<svg
				width="13"
				height="11"
				viewBox="0 0 13 11"
				fill={fill}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11.7395 0.817993L12.7099 1.78837L4.31609 10.1822L0.289001 6.15509L1.25938 5.18471L4.31609 8.24142L11.7395 0.817993Z"
					fill={fill}
				/>
			</svg>
		)
	}
)

CheckmarkIcon.displayName = 'CheckmarkIcon'
