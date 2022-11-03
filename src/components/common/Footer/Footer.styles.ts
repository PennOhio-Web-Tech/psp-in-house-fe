import styled from 'styled-components'

export const FooterContainer = styled.div`
	width: 100%;
	grid-area: footer;
	background-color: ${({ theme }) => theme.colors.navigation.bg.primary};
	font-weight: 700;
	font-family: 'Poppins', sans-serif;
	padding: 0.5rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	height: fit-content;
	margin-top: 2rem;

	h6 {
		color: ${({ theme }) => theme.colors.status.success};
		background: ${({ theme }) => theme.colors.navigation.bg.primary};
	}
`

export const DotDividers = styled.div`
	background: ${({ theme }) => theme.colors.neutral[10]};
	width: 0.3rem;
	height: 0.3rem;
	border-radius: 100%;
	margin: 0 0.75rem;
`

export const FooterLinks = styled.div`
	color: ${({ theme }) => theme.colors.text.offset};
	display: flex;
	align-items: center;
	font-weight: 400;
`

export const FooterLink = styled.a`
	color: ${({ theme }) => theme.colors.text.offset};
	font-size: 0.9rem;
`
