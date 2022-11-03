import styled from 'styled-components'

export const Input = styled.input`
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.pageUi.sectionDivider};
	border-radius: 4px;
	color: ${({ theme }) => theme.colors.text.primary};
	font-size: 1rem;

	outline: none;

	&:focus {
		box-shadow: 0 0 0 2px #007aff;
	}
`
