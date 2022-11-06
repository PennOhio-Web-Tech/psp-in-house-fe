import styled from 'styled-components'

type LayoutContainerProps = { classification?: boolean }
export const LayoutContainer = styled.div<LayoutContainerProps>`
	display: grid;
	height: 100vh;
	grid-template-columns: var(--sideNavigationWidth) auto;
`
