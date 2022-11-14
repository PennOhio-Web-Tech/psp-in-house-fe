import styled, { css } from 'styled-components'
import { MenuItemDiv } from '../Menu/Menu.styles'

type MenuProductItemDivAtts = {
	isSelected: boolean
}

export const MenuCategoryItemDiv = styled(MenuItemDiv)`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	user-select: none;
	background-color: ${({ theme }) => theme.colors.pageUi.selected};

	svg {
		height: 24px;
		width: 24px;
	}

	h4,
	p {
		color: ${({ theme }) => theme.colors.text.offset};
	}

	${({ isSelected }: MenuProductItemDivAtts) => {
		if (isSelected) {
			return css`
				background-color: gray;
			`
		}
	}}
`
