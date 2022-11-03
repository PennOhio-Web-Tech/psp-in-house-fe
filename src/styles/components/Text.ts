import styled, { css } from 'styled-components'

type TextProps = { variant?: 'body' | 'dark-body' }
export const Text = styled.p<TextProps>`
	${({ theme, variant = 'body' }) => {
		switch (variant) {
			case 'body':
				return css`
					color: ${theme.colors.text.secondary};
				`
			case 'dark-body':
				return css`
					color: ${theme.colors.text.primary};
				`
		}
	}}
`
