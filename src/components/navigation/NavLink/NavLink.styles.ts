import styled, { css } from 'styled-components'

export const Anchor = styled.a`
	position: relative;
	cursor: pointer;
	font-size: 0.9rem;
	opacity: 0.8;

	&:hover {
		opacity: 1;
	}

	${({ isActive }: { isActive: boolean }) =>
		isActive &&
		css`
			opacity: 1;
			&::after {
				content: '';
				height: 1px;
				width: 100%;
				position: absolute;
				left: 50%;
				top: 110%;
				transform: translateX(-50%);
				background-color: var(--text-color-white);
			}
		`}
`
