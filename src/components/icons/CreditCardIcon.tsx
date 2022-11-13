import { forwardRef } from 'react'
import { SVGIconProps } from '../../@types'

export const CreditCardIcon = forwardRef<SVGSVGElement, SVGIconProps>(
	({ fill = '#323130', ...props }, ref) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill={fill}
				className="w-6 h-6"
				{...props}
				ref={ref}
			>
				<path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
				<path
					fillRule="evenodd"
					d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
					clipRule="evenodd"
				/>
			</svg>
		)
	}
)

CreditCardIcon.displayName = 'CreditCardIcon'
