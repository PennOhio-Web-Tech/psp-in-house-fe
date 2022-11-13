import { Flex } from '@src/styles/components'
import styled from 'styled-components'
import { MenuItemDiv } from '../Menu/Menu.styles'

export const MenuProductItemDiv = styled(MenuItemDiv)`
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const ActionFlex = styled(Flex)`
	svg {
		height: 24px;
		width: 24px;
	}
`

export const ActionBox = styled(Flex)`
	border: 2px solid ${({ theme }) => theme.colors.pageUi.selected};
	border-radius: 4px;
`
