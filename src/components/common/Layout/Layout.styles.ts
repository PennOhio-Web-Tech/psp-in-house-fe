import styled, { css } from 'styled-components'

type LayoutContainerProps = { classification?: boolean }
export const LayoutContainer = styled.div<LayoutContainerProps>`
	display: grid;
	height: 100vh;
	grid-auto-rows: minmax(100px, auto);

	${({ classification = true }) => {
		return classification
			? css`
					grid-template-rows: var(--topNavigationHeight) min-content auto;
					grid-template-areas:
						'top-nav'
						'.'
						'.';
			  `
			: css`
					grid-template-rows: var(--topNavigationHeight) auto;
					grid-template-areas:
						'top-nav'
						'.';
			  `
	}}
`
