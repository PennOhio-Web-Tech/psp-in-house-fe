import styled from 'styled-components'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import {
	slideDownAndFade,
	slideLeftAndFade,
	slideRightAndFade,
	slideUpAndFade,
} from '@src/styles/keyframes'
import { ReactNode } from 'react'

const StyledContent = styled(HoverCardPrimitive.Content)`
	border-radius: 8px;
	padding: 1rem;
	width: fit-content;
	max-width: 360px;

	background-color: ${({ theme }) => theme.colors.neutral[10]};
	border: 1px solid ${({ theme }) => theme.colors.pageUi.sectionDivider};
	box-shadow: ${({ theme }) => theme.shadows.small};

	@media (prefers-reduced-motion: no-preference) {
		animation-duration: 200ms;
		animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
		will-change: transform, opacity;
		&[data-state='open'] {
			&[data-side='top'] {
				animation-name: ${slideDownAndFade};
			}
			&[data-side='right'] {
				animation-name: ${slideLeftAndFade};
			}
			&[data-side='bottom'] {
				animation-name: ${slideUpAndFade};
			}
			&[data-side='left'] {
				animation-name: ${slideRightAndFade};
			}
		}
	}
`

type ContentProps = { children: ReactNode } & HoverCardPrimitive.HoverCardContentProps
function Content({ children, ...props }: ContentProps) {
	return (
		<HoverCardPrimitive.Portal>
			<StyledContent {...props}>{children}</StyledContent>
		</HoverCardPrimitive.Portal>
	)
}

export const HoverCard = HoverCardPrimitive.Root
export const HoverCardTrigger = HoverCardPrimitive.Trigger
export const HoverCardContent = Content
