import styled from 'styled-components'

export const FeedbackLayoutContainer = styled.div`
	display: grid;
	height: 100vh;
	grid-template-rows: var(--topNavigationHeight) min-content auto;
	grid-auto-rows: minmax(100px, auto);
	grid-template-areas:
		'top-nav'
		'.'
		'.';
	overflow: hidden;
`
