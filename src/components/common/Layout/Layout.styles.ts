import styled from 'styled-components'

export const LayoutContainer = styled.div`
	display: grid;
	height: 100vh;
	grid-template-rows: var(--topNavigationHeight, 0px) auto;
	grid-template-areas:
		'top-nav'
		'.';
`
