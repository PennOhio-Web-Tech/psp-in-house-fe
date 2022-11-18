import { Flex } from '@src/styles/components'
import styled, { css } from 'styled-components'

export const CostAndOrderActionsDiv = styled.div`
	width: 100%;
	background-color: white;
	border-radius: 8px;
	box-shadow: ${({ theme }) => theme.shadows.small};
	padding: 1rem;
	display: grid;
	grid-template-rows: 1fr 1.5fr 2fr;
	gap: 1rem;
	user-select: none;
`

export const TotalDiv = styled.div`
	width: 100%;
	height: 100%;
`
export const PaymentDiv = styled(Flex)`
	width: 100%;
	height: 100%;
`
export const SubtotalDiv = styled(Flex)`
	width: 100%;
`
export const ErrorDiv = styled.div`
	width: 100%;
	height: 100%;
`
export const FlexFullWidth = styled(Flex)`
	width: 100%;
`
export const GrandTotalDiv = styled(Flex)`
	border-top: 1px dashed ${({ theme }) => theme.colors.neutral[50]};
	padding-top: 1rem;
	h6 {
		font-weight: 500;
	}
`
type IconBoxAtts = { isActive: boolean }
export const IconBox = styled(Flex)`
	border: 1px solid ${({ theme }) => theme.colors.neutral[50]};
	width: 96px;
	height: 56px;
	border-radius: 8px;
	svg {
		height: 24px;
		width: 24px;
	}

	${({ isActive = false }: IconBoxAtts) => {
		console.log(isActive)
		if (isActive) {
			return css`
				background-color: ${({ theme }) => theme.colors.neutral[60]};
			`
		}
	}}
`
export const IconsDiv = styled(Flex)`
	padding-top: 0.25rem;
	p {
		color: ${({ theme }) => theme.colors.pageUi.selected};
	}
`

export const PlaceOrderDiv = styled(Flex)`
	background-color: ${({ theme }) => theme.colors.pageUi.selected};
	padding: 1rem;
	width: 100%;
	border-radius: 32px;
	p {
		color: white;
		font-weight: 600;
	}
`
