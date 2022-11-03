import styled from 'styled-components'

export const ClassificationLabel = styled.h6`
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.text.offset};
	font-size: 0.75rem;
	width: 100%;
	text-align: center;
	height: fit-content;
	background-color: ${({ theme }) => theme.colors.status.success};
`
