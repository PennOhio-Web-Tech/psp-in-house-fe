import { SVGIconProps } from '@src/@types'
import { forwardRef } from 'react'

export const InputFormIcon = forwardRef<SVGSVGElement>(
	({ fill = '#333333', ...props }: SVGIconProps, ref) => {
		return (
			<svg
				width="50"
				height="52"
				viewBox="0 0 50 52"
				fill="none"
				ref={ref}
				{...props}
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_0_5559)">
					<g clipPath="url(#clip1_0_5559)">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M49.2905 11.2515H0V0.959961H49.2913V11.2515H49.2905ZM3.37069 7.88084H45.9206V4.33066H3.37069V7.88084Z"
							fill={fill}
						/>
					</g>
					<g clipPath="url(#clip2_0_5559)">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M49.2905 24.2076H0V13.916H49.2913V24.2076H49.2905ZM3.37069 20.8369H45.9206V17.2867H3.37069V20.8369Z"
							fill={fill}
						/>
					</g>
					<g clipPath="url(#clip3_0_5559)">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M49.2905 37.1636H0V26.8721H49.2913V37.1636H49.2905ZM3.37069 33.793H45.9206V30.2428H3.37069V33.793Z"
							fill={fill}
						/>
					</g>
					<rect y="40.3237" width="23.9227" height="7.05739" fill={fill} />
					<path
						d="M37.986 44.2222L40.4651 50.1673L38.2893 51.0394L35.8195 45.1197L31.3457 48.8569V31.1372L31.3668 31.1279L43.9411 43.6433L37.986 44.2222Z"
						fill={fill}
					/>
				</g>
				<defs>
					<clipPath id="clip0_0_5559">
						<rect
							width="49.2913"
							height="50.0795"
							fill="white"
							transform="translate(0 0.959961)"
						/>
					</clipPath>
					<clipPath id="clip1_0_5559">
						<rect
							width="49.2913"
							height="10.2916"
							fill="white"
							transform="translate(0 0.959961)"
						/>
					</clipPath>
					<clipPath id="clip2_0_5559">
						<rect
							width="49.2913"
							height="10.2916"
							fill="white"
							transform="translate(0 13.916)"
						/>
					</clipPath>
					<clipPath id="clip3_0_5559">
						<rect
							width="49.2913"
							height="10.2916"
							fill="white"
							transform="translate(0 26.8721)"
						/>
					</clipPath>
				</defs>
			</svg>
		)
	}
)

InputFormIcon.displayName = 'InputFormIcon'
