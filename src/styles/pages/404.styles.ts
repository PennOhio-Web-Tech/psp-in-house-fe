import styled, { css } from 'styled-components'

type TextProps = {
	lightText?: boolean
}

export const NotFoundPageContainer = styled.div`
	display: grid;
	place-content: center;
	height: 100%;
	flex-grow: 1;
`

export const Text = styled.p`
	font-size: 1.25rem;
	color: var(--text-color);

	${({ lightText }: TextProps) =>
		lightText &&
		css`
			opacity: 0.7;
		`}
`
