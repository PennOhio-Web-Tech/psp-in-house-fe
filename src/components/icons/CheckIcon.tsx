import { SVGIconProps } from '@src/@types'
import { forwardRef } from 'react'

export const CheckIcon = forwardRef<SVGSVGElement, SVGIconProps>(
	({ fill = '#FFF', ...props }: SVGIconProps, ref) => {
		return (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
					fill={fill}
				/>
			</svg>
		)
	}
)

CheckIcon.displayName = 'CheckIcon'
