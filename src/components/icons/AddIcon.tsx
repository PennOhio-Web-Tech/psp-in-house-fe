import { forwardRef } from 'react'
import { SVGIconProps } from '../../@types'

export const AddIcon = forwardRef<SVGSVGElement, SVGIconProps>(
	({ fill = '#323130', ...props }, ref) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke={fill}
				className="w-6 h-6"
				{...props}
				ref={ref}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
		)
	}
)

AddIcon.displayName = 'AddIcon'
