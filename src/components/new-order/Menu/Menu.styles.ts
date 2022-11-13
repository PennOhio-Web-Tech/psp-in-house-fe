import styled from 'styled-components'

export const MenuDiv = styled.div``

const MenuCardsDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 232px);
	gap: 1rem;
	width: 100%;
`

export const MenuCategoriesDiv = styled(MenuCardsDiv)`
	margin-top: 2rem;
`

export const MenuProductsDiv = styled(MenuCardsDiv)`
	overflow-y: auto;
	height: 25rem;
`

export const DividerLine = styled.div`
	width: 100%;
	height: 1px;
	background-color: #757575;
`

export const MenuItemDiv = styled.div`
	border-radius: 8px;
	height: 10rem;
	box-shadow: ${({ theme }) => theme.shadows.small};
	padding: 1rem;
`
