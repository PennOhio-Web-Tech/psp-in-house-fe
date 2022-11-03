import { ReactNode } from 'react'
import { LayoutContainer } from './Layout.styles'

type LayoutProps = {
	children: ReactNode
	classification?: boolean
}

export function Layout({ children, classification = true }: LayoutProps) {
	return <LayoutContainer classification={classification}>{children}</LayoutContainer>
}
