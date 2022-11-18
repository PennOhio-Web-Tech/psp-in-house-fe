import { Flex } from '@src/styles/components'
import styled from 'styled-components'

export const OrderItemDiv = styled(Flex)`
	background-color: white;
	border-radius: 8px;
	height: 60px;
	box-shadow: ${({ theme }) => theme.shadows.small};
	padding: 1rem;
	width: 100%;
	span {
		color: ${({ theme }) => theme.colors.neutral[60]};
	}
	div {
		svg {
			width: 24px;
			height: 24px;
		}
	}
	user-select: none;
`
export const BlackCircle = styled(Flex)`
	background-color: ${({ theme }) => theme.colors.pageUi.selected};
	border-radius: 50%;
	color: white;
	height: 24px;
	width: 24px;
`
