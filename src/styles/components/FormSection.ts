import styled, { css } from 'styled-components'

type FormSectionProps = {
	noBorder?: boolean
}

export const FormSection = styled.section`
	padding: 3rem 0;
	padding-right: 8rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.pageUi.sectionDivider};

	${({ noBorder = false }: FormSectionProps) =>
		noBorder &&
		css`
			border-bottom: none;
		`}

	@media (max-width: 1280px) {
		padding-right: 0;
	}

	@media (max-width: 1440px) {
		padding-right: 2rem;
	}
`
