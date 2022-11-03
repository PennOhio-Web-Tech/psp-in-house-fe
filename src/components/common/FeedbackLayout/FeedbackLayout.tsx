import { ReactNode } from 'react'
import { FeedbackLayoutContainer } from './FeedbackLayout.styles'

type FeedbackLayoutProps = { children: ReactNode }
export function FeedbackLayout({ children }: FeedbackLayoutProps) {
	return <FeedbackLayoutContainer>{children}</FeedbackLayoutContainer>
}
