import styled from 'styled-components'
import { ReactNode } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../HoverCard'
import { InfoIcon } from '@src/components/icons'

type InfoHoverCardProps = {
	children: ReactNode
	side?: 'left' | 'right' | 'top' | 'bottom'
}
export function InfoHoverCard({ children, side = 'bottom' }: InfoHoverCardProps) {
	return (
		<HoverCard openDelay={100} closeDelay={100}>
			<HoverCardTrigger asChild>
				<InfoIcon style={{ marginLeft: '0.5rem' }} fill="#727272" />
			</HoverCardTrigger>
			<HoverCardContent
				sideOffset={5}
				onClick={e => e.stopPropagation()}
				style={{ zIndex: '2000000000000' }}
				side={side}
			>
				<ContentContainer>{children}</ContentContainer>
			</HoverCardContent>
		</HoverCard>
	)
}

const ContentContainer = styled.div``
