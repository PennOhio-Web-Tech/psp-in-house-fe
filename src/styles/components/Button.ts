import styled, { css } from 'styled-components'

type ButtonAtts = {
	variant: 'primary' | 'secondary' | 'text' | 'error' | 'white'
}

export const Button = styled.button`
	height: 54.5px;
	svg {
		width: 23px;
		height: 23px;
		margin-left: 1rem;
	}

	padding: 1rem 1.25rem;
	border-radius: 0.25rem;
	text-transform: uppercase;
	font-weight: 600;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	:disabled {
		background: #ededed;
		border: 3px solid #e0e0e0;
		color: #c2c2c2;
		cursor: not-allowed;

		:hover,
		:active {
			background: #ededed;
			border: 3px solid #e0e0e0;
			color: #c2c2c2;
		}
	}

	${({ variant }: ButtonAtts) => {
		if (variant === 'primary') {
			return css`
				border: none;
				background: ${({ theme }) => theme.colors.button.fill};
				color: ${({ theme }) => theme.colors.text.offset};

				&:hover {
					background: ${({ theme }) => theme.colors.button.hoverFill};
				}
				&:active {
					background: ${({ theme }) => theme.colors.button.hoverFill};
				}
			`
		}

		if (variant === 'secondary') {
			return css`
				background: ${({ theme }) => theme.colors.neutral[10]};
				border: 2px solid ${({ theme }) => theme.colors.button.fill};
				color: ${({ theme }) => theme.colors.button.fill};
				&:hover {
					border: 2px solid ${({ theme }) => theme.colors.button.hoverFill};
					color: ${({ theme }) => theme.colors.button.hoverFill};
				}
				&:active {
					color: ${({ theme }) => theme.colors.text.offset};
					background: ${({ theme }) => theme.colors.button.hoverFill};
					border: 2px solid ${({ theme }) => theme.colors.button.hoverFill};
				}
			`
		}

		if (variant === 'text') {
			return css`
				background: none;
				border: none;
				padding: 0;
				color: ${({ theme }) => theme.colors.button.fill};
				&:hover {
					color: ${({ theme }) => theme.colors.button.hoverFill};
				}

				svg {
					margin-left: 0.25rem;
				}
			`
		}

		if (variant === 'error') {
			return css`
				background: ${({ theme }) => theme.colors.status.error};
				color: ${({ theme }) => theme.colors.text.offset};
				border: none;
				&:hover {
					color: ${({ theme }) => theme.colors.text.offset};
					background: #d41c1c;
				}
				&:active {
					background: #d41c1c;
					color: ${({ theme }) => theme.colors.text.offset};
				}
			`
		}

		if (variant === 'white') {
			return css`
				background-color: ${({ theme }) => theme.colors.neutral[10]};
				color: ${({ theme }) => theme.colors.neutral[70]};
				border: 1px solid ${({ theme }) => theme.colors.neutral[50]};
			`
		}
	}}
`
