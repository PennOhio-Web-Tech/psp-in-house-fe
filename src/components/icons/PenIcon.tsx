import { SVGIconProps } from '@src/@types'
import { forwardRef } from 'react'

export const PenIcon = forwardRef<SVGSVGElement, SVGIconProps>(
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
					d="M2 17.8339V22H6.16609L18.4533 9.71282L14.2872 5.54673L2 17.8339ZM21.675 6.49104C22.1083 6.05777 22.1083 5.35787 21.675 4.92459L19.0754 2.32495C18.6421 1.89168 17.9422 1.89168 17.509 2.32495L15.4759 4.35801L19.642 8.52409L21.675 6.49104V6.49104Z"
					fill={fill}
				/>
			</svg>
		)
	}
)

PenIcon.displayName = 'PenIcon'
