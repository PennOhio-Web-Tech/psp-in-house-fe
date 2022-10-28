import styled, { css } from 'styled-components'

export const LogoImage = styled.img`
	height: 32px;
	width: auto;
`

export const Anchor = styled.a`
	display: flex;
	align-items: center;
	gap: 1rem;
	user-select: none;
`

export const StyledTenantName = styled.span`
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.accentText || 'var(--text-color-white)'};
`
