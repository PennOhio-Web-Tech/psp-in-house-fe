import { SVGIconProps } from '@src/@types'
import { forwardRef } from 'react'

export const FreeFormIcon = forwardRef<SVGSVGElement>(
	({ fill = '#333333', ...props }: SVGIconProps, ref) => {
		return (
			<svg
				width="50"
				height="38"
				viewBox="0 0 50 38"
				fill="none"
				{...props}
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_0_5524)">
					<path
						d="M32.1165 0.0620117H29.9892V9.03816H25.6309V13.3446H29.9892V37.9383H32.1165V13.3446H36.4749V9.03816H32.1165V0.0620117Z"
						fill={fill}
					/>
					<path
						d="M19.3021 0.0620117H17.1748V24.6556H12.8164V28.9621H17.1748V37.9383H19.3021V28.9621H23.6604V24.6556H19.3021V0.0620117Z"
						fill={fill}
					/>
					<path
						d="M49.2913 24.6556H44.9329V0.0620117H42.8056V24.6556H38.4473V28.9621H42.8056V37.9383H44.9329V28.9621H49.2913V24.6556Z"
						fill={fill}
					/>
					<path
						d="M6.48566 0.0620117H4.35836V9.03816H0V13.3446H4.35836V37.9383H6.48566V13.3446H10.844V9.03816H6.48566V0.0620117Z"
						fill={fill}
					/>
				</g>
				<defs>
					<clipPath id="clip0_0_5524">
						<rect
							width="49.291"
							height="37.8763"
							fill="white"
							transform="translate(0 0.0620117)"
						/>
					</clipPath>
				</defs>
			</svg>
		)
	}
)

FreeFormIcon.displayName = 'FreeFormIcon'
