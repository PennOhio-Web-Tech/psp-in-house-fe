import styled, { css } from 'styled-components'

type FlexProps = {
	justifyContent?: 'space-between' | 'center' | 'space-evenly' | 'flex-start' | 'flex-end'
	alignItems?: 'space-between' | 'center' | 'space-evenly' | 'flex-start' | 'flex-end'
	direction?: 'column' | 'row'
	gap?: string
}

export const Flex = styled.div`
	display: flex;

	${({
		direction = 'row',
		justifyContent = 'space-between',
		gap = '0',
		alignItems = 'flex-start',
	}: FlexProps) => css`
		flex-direction: ${direction};
		justify-content: ${justifyContent};
		gap: ${gap};
		align-items: ${alignItems};
	`}
`
