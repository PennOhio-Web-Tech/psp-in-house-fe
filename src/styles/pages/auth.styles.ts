import styled, { css } from 'styled-components'

export const AuthPageContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const FormContainer = styled.div`
	background: white;
	border-radius: 0.5rem;
	padding: 3rem;
	width: min(fit-content, 80vw);
	border: 1px solid ${({ theme }) => theme.colors.pageUi.sectionDivider};
	box-shadow: ${({ theme }) => theme.shadows.large};
	border-radius: 0.5rem;
`

export const Separator = styled.div`
	height: 1px;
	min-width: 360px;
	width: 100%;
	background: ${({ theme }) => theme.colors.pageUi.sectionDivider};
	margin-bottom: 3rem;
`

export const FormTitle = styled.h3`
	margin-bottom: 1rem;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.text.primary};
`

export const FormTitlePrefix = styled.p`
	margin-bottom: 0.25rem;
	color: ${({ theme }) => theme.colors.text.secondary};
	font-size: 1rem;
`

type ActionsContainerProps = {
	flexDirection?: 'column' | 'row'
	alignItems?: string
	justifyContent?: string
	marginTop?: string
}
export const ActionsContainer = styled.div`
	display: flex;
	margin-top: 6rem;

	@media (max-width: 1280px) {
		margin-top: 2rem;
	}

	${({ flexDirection = 'row' }: ActionsContainerProps) => {
		if (flexDirection === 'column') {
			return css`
				flex-direction: column;
				button {
					margin-bottom: 4rem;
				}
			`
		}
	}}

	${({ justifyContent = 'space-between', alignItems = 'center' }: ActionsContainerProps) => css`
		justify-content: ${justifyContent};
		align-items: ${alignItems};
	`}

	p {
		color: ${({ theme }) => theme.colors.text.secondary};
		font-size: 0.9rem;
	}

	a {
		color: ${({ theme }) => theme.colors.pageUi.componentHighlight};
		text-decoration: underline;
		font-size: 0.9rem;
		transition: color 100ms ease-in-out;
		margin-left: 0.5rem;

		&:hover {
			color: ${({ theme }) => theme.colors.text.primary};
		}
	}
`
