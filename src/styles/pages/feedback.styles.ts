import styled from 'styled-components'
import { Button } from '../components'

export const FeedbackPageContentContainer = styled.div`
	width: min(90vw, 720px);
	margin: 0 auto;
`

export const FeedbackPageContainer = styled.main`
	flex-grow: 1;
	padding-top: 2rem;
`

export const Heading = styled.h5`
	color: ${({ theme }) => theme.colors.pageUi.componentHighlight};
	font-weight: 700;
	font-size: 20px;
	line-height: 23px;
	text-transform: uppercase;
	margin-bottom: 0.5rem;
	padding: 0 0.25rem;
`

export const StyledButton = styled(Button)`
	padding: 1rem 6rem;
	margin: 0 auto;
	margin-top: 4rem;
`
