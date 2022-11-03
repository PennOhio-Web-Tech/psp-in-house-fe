import * as PopoverPrimitive from '@radix-ui/react-popover'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import {
	slideDownAndFade,
	slideLeftAndFade,
	slideRightAndFade,
	slideUpAndFade,
} from '@src/styles/keyframes'
import styled from 'styled-components'

/*
	See radix-ui documentation for functionality
	https://www.radix-ui.com/docs/primitives/components/popover
*/
type PopoverProps = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode
	title?: string
	description?: string
	onClose?: () => void
	preferredWidth?: string
	maxHeight?: string
	noTitle?: boolean
	noDescription?: boolean
	scroll?: boolean
}

const StyledContent = styled(PopoverPrimitive.PopoverContent)`
	color: ${({ theme }) => theme.colors.neutral[70]};

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

export const PopoverContent = forwardRef<HTMLDivElement, PopoverProps>(
	(
		{ children, title, noTitle = false, noDescription = false, description, onClose, ...props },
		forwardedRef
	) => (
		<PopoverPrimitive.Portal>
			<StyledContent {...props} align="end">
				{children}
			</StyledContent>
		</PopoverPrimitive.Portal>
	)
)
PopoverContent.displayName = 'PopoverContent'

export const PopoverTrigger = PopoverPrimitive.Trigger
export const Popover = PopoverPrimitive.Root
export const PopoverClose = PopoverPrimitive.Close
