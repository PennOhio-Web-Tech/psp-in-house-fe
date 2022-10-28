import styled from 'styled-components'
import { NotFoundPageContainer, Text } from '@src/styles/pages/404.styles'
import { Heading } from '@src/styles/components'

// SAMPLE NOT FOUND PAGE
export default function NotFoundPage() {
	return (
		<NotFoundPageContainer>
			<Heading>404 - Page not found</Heading>
		</NotFoundPageContainer>
	)
}
