import { MenuItemDiv } from '@src/components/common/Menu/Menu.styles'
import styled from 'styled-components'

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
