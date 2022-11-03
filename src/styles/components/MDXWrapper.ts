import styled from 'styled-components'

export const MDXWrapper = styled.div`
	width: min(1024px, 95vw);
	margin: 0 auto;
	padding: 2rem;
	flex-grow: 1;

	p {
		margin-bottom: 1rem;
	}

	a {
		color: ${({ theme }) => theme.colors.pageUi.componentHighlight};
	}

	li {
		margin-bottom: 1rem;
		list-style: inside;
		padding-left: 4rem;
		color: ${({ theme }) => theme.colors.text.secondary};
	}

	strong {
		font-family: 'Source Sans Pro', sans-serif;
	}
`
