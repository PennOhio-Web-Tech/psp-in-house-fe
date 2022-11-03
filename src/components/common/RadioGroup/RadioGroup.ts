import styled from 'styled-components'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

/*
	See radix-ui documentation for functionality
	https://www.radix-ui.com/docs/primitives/components/radio-group
*/

const StyledRadioGroup = styled(RadioGroupPrimitive.Root)``
const StyledRadio = styled(RadioGroupPrimitive.Item)`
	align-self: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	border-radius: 100%;
	background-color: ${({ theme }) => theme.colors.pageUi.pageBg};
	border: 2px solid #8d8d8d;
`

const StyledIndicator = styled(RadioGroupPrimitive.Indicator)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: relative;
	background-color: ${({ theme }) => theme.colors.button.fill};
	width: 1.25rem;
	height: 1.25rem;
	display: block;
	border-radius: 100%;
`

// Exports
export const RadioGroup = StyledRadioGroup
export const RadioGroupRadio = StyledRadio
export const RadioGroupIndicator = StyledIndicator
