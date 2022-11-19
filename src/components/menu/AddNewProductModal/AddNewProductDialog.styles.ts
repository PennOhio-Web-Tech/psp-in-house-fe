import { MenuItemDiv } from '@src/components/common/Menu/Menu.styles'
import styled from 'styled-components'
import { Flex } from '@src/styles/components'

export const AddNewProductCard = styled(MenuItemDiv)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.pageUi.selected};
	flex-direction: column;
	gap: 0.5rem;
	svg {
		width: 56px;
		height: 56px;
	}
	h6 {
		color: ${({ theme }) => theme.colors.text.offset};
	}
`

export const FormContainer = styled.div`
	width: min(fit-content, 80vw);
	padding: 0 2rem;
	margin: 2rem 0;
	overflow-y: auto;
	max-height: min(50vh, 900px);
`

export const NumberInputsContainer = styled.div`
	display: grid;
	grid-template-columns: minmax(200px, 1fr) minmax(200px, 4fr);
	grid-gap: 2rem;
	position: relative;
`

export const CurrencyWrapper = styled.div`
	position: relative;
	span {
		position: absolute;
		left: 12px;
		top: 15px;
	}
	input {
		padding-left: 1.5rem;
	}
`

export const ActionContainer = styled(Flex)`
	padding: 2rem;
	padding-top: 0;
`
