import { TrashIcon } from '@src/components/icons'
import styled from 'styled-components'

export const ToppingsInputList = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;
	grid-template-rows: auto(1fr);

	margin-top: 0.25rem;
`

export const StyledTrashIcon = styled(TrashIcon)`
	cursor: pointer;
	width: 28px;
	height: 28px;
	position: absolute;
	left: calc(100% + 1rem);

	&:hover {
		path {
			fill: ${({ theme }) => theme.colors.status.error};
		}
	}
`

export const ToppingInputContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 0.25fr 0.25fr;
	grid-gap: 1rem;

	align-items: center;
`

export const AddNewTopping = styled.button`
	height: 53px;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.pageUi.selected};
	border-radius: 4px;
	color: ${({ theme }) => theme.colors.text.primary};
	letter-spacing: unset;
	font-weight: 400;

	background-color: ${({ theme }) => theme.colors.neutral[10]};
	color: ${({ theme }) => theme.colors.neutral[60]};
	&:hover {
		background-color: ${({ theme }) => theme.colors.neutral[30]};
		color: ${({ theme }) => theme.colors.neutral[90]};

		svg {
			path {
				fill: ${({ theme }) => theme.colors.neutral[80]};
			}
		}
	}
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`
