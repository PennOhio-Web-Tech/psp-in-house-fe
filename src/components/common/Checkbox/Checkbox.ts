import * as CheckboxPrimitives from '@radix-ui/react-checkbox'
import styled from 'styled-components'

const StyledCheckbox = styled(CheckboxPrimitives.Root)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.25rem;
	height: 1.25rem;
	background-color: ${({ theme }) => theme.colors.neutral[20]};
	border: 1px solid ${({ theme }) => theme.colors.neutral[70]};
	border-radius: 2px;

	svg {
		width: 0.9rem;
		height: 0.9rem;
	}
	:disabled {
		cursor: not-allowed;
	}
`
const StyledCheckboxIndicator = styled(CheckboxPrimitives.Indicator)`
	display: flex;
	align-items: center;
	justify-content: center;
`
export const Checkbox = StyledCheckbox
export const CheckboxIndicator = StyledCheckboxIndicator
