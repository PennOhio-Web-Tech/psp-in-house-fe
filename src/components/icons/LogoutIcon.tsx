import { SVGIconProps } from '@src/@types'
import { forwardRef } from 'react'

export const LogoutIcon = forwardRef<SVGSVGElement, SVGIconProps>(
	({ fill = '#757575', ...props }, ref) => {
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
					d="M8.35294 21H4.11765C2.9481 21 2 19.9926 2 18.75L2 5.25C2 4.00736 2.9481 3 4.11765 3L8.35294 3V5.25L4.11765 5.25L4.11765 18.75H8.35294V21Z"
					fill={fill}
				/>
				<path
					d="M15.3877 5.11766L13.884 6.60869L18.0337 10.7938L8.35295 10.7938C7.76817 10.7938 7.29413 11.2679 7.29413 11.8527C7.29413 12.4374 7.76819 12.9115 8.35296 12.9115L18.0541 12.9114L13.8395 17.0904L15.3305 18.5942L22.0974 11.8845L15.3877 5.11766Z"
					fill={fill}
				/>
			</svg>
		)
	}
)

LogoutIcon.displayName = 'LogoutIcon'
