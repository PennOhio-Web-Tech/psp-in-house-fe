import styled from 'styled-components'

export const ErrorMessage = styled.p`
	padding: 1rem;
	background: ${({ theme }) => theme.colors.status.error};
	color: ${({ theme }) => theme.colors.text.offset};
	border-radius: 0.25rem;
	margin-bottom: 1rem;
	width: fit-content;
`
