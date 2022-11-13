import { forwardRef } from 'react'
import { SVGIconProps } from '../../@types'

export const MinusIcon = forwardRef<SVGSVGElement, SVGIconProps>(
	({ fill = '#323130', ...props }, ref) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="w-6 h-6"
				{...props}
				ref={ref}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
			</svg>
		)
	}
)

MinusIcon.displayName = 'MinusIcon'
