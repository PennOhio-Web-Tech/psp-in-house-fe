import styled from 'styled-components'

export const FieldErrorMessage = styled.p`
	color: ${({ theme }) => theme.colors.status.error};
	font-size: 0.9rem;
	position: absolute;
	top: 100%;
	left: 0;
	width: max-content;
`
