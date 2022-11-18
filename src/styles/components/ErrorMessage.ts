import styled from 'styled-components'

export const ErrorMessage = styled.p`
	padding: 0.5rem;
	background: ${({ theme }) => theme.colors.status.error};
	color: ${({ theme }) => theme.colors.text.offset};
	border-radius: 0.25rem;
	margin-bottom: 0.5rem;
`
