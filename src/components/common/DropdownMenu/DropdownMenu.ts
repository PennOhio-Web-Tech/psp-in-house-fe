import styled from 'styled-components'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import {
	slideDownAndFade,
	slideLeftAndFade,
	slideRightAndFade,
	slideUpAndFade,
} from '@src/styles/keyframes'

/*
	See radix-ui documentation for functionality
	https://www.radix-ui.com/docs/primitives/components/dropdown-menu
*/

const StyledContent = styled(DropdownMenuPrimitive.Content)`
	min-width: 300px;
	background-color: ${({ theme }) => theme.colors.neutral[10]};
	border-radius: 4px;
	padding: 0.5rem;
	border: 1px solid ${({ theme }) => theme.colors.neutral[40]};
	box-shadow: ${({ theme }) => theme.shadows.large};
	z-index: 100000;

	animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
	animation-duration: 400ms;
	will-change: transform, opacity;

	&[data-state='open'] {
		svg {
			transform: rotate(180deg);
		}
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
`

const StyledItem = styled(DropdownMenuPrimitive.Item)`
	all: unset;
	font-size: 1rem;
	line-height: 1;
	display: flex;
	align-items: center;
	height: 1rem;
	padding: 1rem;
	user-select: none;
	border-radius: 4px;
	cursor: pointer;

	&:focus {
		background: ${({ theme }) => theme.colors.neutral[30]};
	}
`

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuGroup = DropdownMenuPrimitive.Group
export const DropdownMenuContent = StyledContent
export const DropdownMenuItem = StyledItem
