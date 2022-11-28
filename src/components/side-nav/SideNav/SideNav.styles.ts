import styled from 'styled-components'

export const SideNavContainer = styled.div`
	display: grid;
	background-color: ${({ theme }) => theme.colors.navigation.bg.primary};
	grid-template-rows: 1.5fr 1.5fr 4fr 1.5fr;
	box-shadow: ${({ theme }) => theme.shadows.small};
`
export const LogoContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 1rem;
	padding-left: 2rem;
`

export const AvatarAndSignOut = styled.div`
	/* border: 1px solid red; */
`
