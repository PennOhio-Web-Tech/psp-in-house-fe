import styled from 'styled-components'

export const InternalPageContainer = styled.div`
	background: ${({ theme }) => theme.colors.pageUi.pageBg};
	min-height: fit-content;
	width: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`
