import styled from 'styled-components'

export const MenuDiv = styled.div``

const MenuCardsDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 232px);
	gap: 1.5rem;
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

export const AddNewCategoryCard = styled(MenuItemDiv)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	flex-direction: column;
	gap: 0.5rem;
	svg {
		width: 56px;
		height: 56px;
		path {
			fill: ${({ theme }) => theme.colors.pageUi.selected};
		}
	}
`
