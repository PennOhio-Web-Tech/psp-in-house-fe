import { SVGIconProps } from '@src/@types'
import { forwardRef } from 'react'

export const ChevronDownIcon = forwardRef<SVGSVGElement, SVGIconProps>(
	({ fill = '#818181', ...props }: SVGIconProps, ref) => {
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
					d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
					fill={fill}
				/>
			</svg>
		)
	}
)

ChevronDownIcon.displayName = 'ChevronDownIcon'
