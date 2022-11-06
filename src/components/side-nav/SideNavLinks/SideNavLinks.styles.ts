import { Flex } from '@src/styles/components'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export const LinksContainer = styled(Flex)`
	padding-left: 0.5rem;
	width: 100%;
`
type StyledContentProps = {
	isActive: boolean
	isPlus: boolean
}
export const NavLink = styled(Link)<StyledContentProps>`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	width: 100%;
	padding: 1rem 1rem;
	border-radius: 8px;
	svg {
		width: 24px;
		height: 24px;
	}
	:hover {
		background-color: ${({ theme }) => theme.colors.pageUi.pageBg};
	}

	${({ isPlus }: { isPlus: boolean }) => {
		return (
			isPlus &&
			css`
				svg {
					stroke: ${({ theme }) => theme.colors.pageUi.selected};
				}
			`
		)
	}}

	${({ isActive }: { isActive: boolean }) => {
		return (
			isActive &&
			css`
				background-color: ${({ theme }) => theme.colors.pageUi.selected};
				h6 {
					color: ${({ theme }) => theme.colors.navigation.bg.primary};
				}
				:hover {
					background-color: ${({ theme }) => theme.colors.pageUi.selected};
				}
				svg {
					fill: ${({ theme }) => theme.colors.navigation.bg.primary};

					${({ isPlus }: { isPlus: boolean }) => {
						return (
							isPlus &&
							css`
								stroke: ${({ theme }) => theme.colors.navigation.bg.primary};
							`
						)
					}}

					path {
						fill: ${({ theme }) => theme.colors.navigation.bg.primary};
					}
				}
			`
		)
	}}
`
export const LinkButton = styled.div``
