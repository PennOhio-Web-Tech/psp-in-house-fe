import styled from 'styled-components'

export const Label = styled.label`
	color: ${({ theme }) => theme.colors.neutral[90]};
	font-size: 1.125rem;
	display: flex;
	justify-content: center;
	width: fit-content;

	svg {
		width: 22px;
		height: 22px;
	}

	span {
		color: ${({ theme }) => theme.colors.text.secondary};
		font-weight: 300;
	}

	@media (max-width: 1280px) {
		font-size: 1rem;
	}
`
