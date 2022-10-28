import { HTMLAttributes } from 'react'

export type NavigationLink = {
	id: string
	href: string
	text: string
	testId: string
	exactPath: boolean
}

export type SVGIconProps = HTMLAttributes<SVGSVGElement> & {
	fill?: string
}
