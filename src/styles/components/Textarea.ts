import styled from 'styled-components'

export const Textarea = styled.textarea`
	resize: vertical;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.pageUi.sectionDivider};
	border-radius: 4px;
	color: ${({ theme }) => theme.colors.text.primary};
	min-height: 98px;
	overflow-y: auto;

	outline: none;

	&:focus {
		box-shadow: 0 0 0 2px #007aff;
	}
`
