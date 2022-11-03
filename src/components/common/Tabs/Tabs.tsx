import styled from 'styled-components'
import * as TabsPrimitive from '@radix-ui/react-tabs'

const StyledTabs = styled(TabsPrimitive.Root)``
const StyledList = styled(TabsPrimitive.List)`
	margin-bottom: 1rem;
	display: flex;
	gap: 2rem;
`

const StyledTrigger = styled(TabsPrimitive.Trigger)`
	all: unset;
	font-size: 0.9rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.25rem;

	span {
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.colors.pageUi.componentHighlight};
		color: ${({ theme }) => theme.colors.text.offset};
		border-radius: 0.25rem;
		margin-right: 0.25rem;
		width: 32px;
		height: 32px;
	}

	&[data-state='inactive'] {
		color: ${({ theme }) => theme.colors.neutral[60]};
		span {
			background-color: ${({ theme }) => theme.colors.neutral[40]};
		}
	}

	&[data-state='active'] {
		color: unset;
		span {
			background-color: ${({ theme }) => theme.colors.pageUi.componentHighlight};
			color: ${({ theme }) => theme.colors.text.offset};
		}
	}

	&[data-account-form-state='complete'] {
		color: unset;
		svg {
			width: 28px;
			height: auto;
		}

		&[data-state='inactive'] span,
		span {
			width: unset;
			height: unset;
			min-width: 32px;
			min-height: 32px;
			padding: 0;
			background-color: ${({ theme }) => theme.colors.pageUi.componentHighlight};
		}
	}

	&:disabled {
		cursor: not-allowed;
	}
`
const StyledContent = styled(TabsPrimitive.Content)``

export const Tabs = StyledTabs
export const TabsList = StyledList
export const TabsTrigger = StyledTrigger
export const TabsContent = StyledContent
