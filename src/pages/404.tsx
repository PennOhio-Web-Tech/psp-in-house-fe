import styled from 'styled-components'

import { useTenant } from '@src/hooks/useTenant'
import { NotFoundPageContainer, Text } from '@src/styles/pages/404.styles'
import { Heading } from '@src/styles/components'

// SAMPLE NOT FOUND PAGE
export default function NotFoundPage() {
	const { tenant, subdomain } = useTenant()
	const hasInvalidSubdomain = subdomain && !tenant

	return (
		<NotFoundPageContainer>
			<Heading>404 - Page not found</Heading>
			{hasInvalidSubdomain ? (
				<Text lightText>Invalid subdomain</Text>
			) : (
				<Text lightText>Please include a subdomain</Text>
			)}
		</NotFoundPageContainer>
	)
}
