import { ReactNode } from 'react'
import { LayoutContainer } from './Layout.styles'

type LayoutProps = {
	children: ReactNode
}

export function Layout({ children }: LayoutProps) {
	return <LayoutContainer>{children}</LayoutContainer>
}
