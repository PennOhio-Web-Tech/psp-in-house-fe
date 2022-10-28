import styled from 'styled-components'

export const HeaderContainer = styled.header`
	grid-area: top-nav;
	display: flex;
	align-items: center;
	padding: 0 2rem;

	a {
		color: var(--text-color-white);
	}
`

export const NavContainer = styled.nav`
	display: flex;
	align-items: center;
	gap: 1rem;
	flex-grow: 1;

	p {
		color: var(--text-color-white);
		text-transform: uppercase;
	}
`

export const LinksContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.25rem;
	margin-left: 1rem;
`

export const AvatarContainer = styled.div`
	user-select: none;
	display: flex;
	align-items: center;
	gap: 0.75rem;

	cursor: pointer;

	color: white;
	font-size: 0.9rem;
`
