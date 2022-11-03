import styled, { css } from 'styled-components'

import { Button } from '../components'
type TitleProps = { hasData?: boolean }

export const Title = styled.h6`
	margin-bottom: 0.75rem;
	span {
		color: ${({ theme }) => theme.colors.text.secondary};
		font-weight: 300;
	}
	${({ hasData = true }: TitleProps) =>
		!hasData &&
		css`
			color: ${({ theme }) => theme.colors.neutral[70]};
		`}
`
export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
`

type SectionProps = { noBorder?: boolean }
export const SectionOuterContainer = styled.section`
	position: relative;
	padding: 3rem 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.pageUi.sectionDivider};

	${({ noBorder = false }: SectionProps) =>
		noBorder &&
		css`
			border-bottom: none;
		`}
`

export const SectionContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

export const TwoColumnGrid = styled.div`
	display: grid;
	grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr);
	grid-gap: 2rem;
`

export const RequirementsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

export const EditButton = styled(Button)`
	position: absolute;
	top: 0.5rem;
	right: 0;

	svg {
		path {
			fill: ${({ theme }) => theme.colors.button.fill};
		}
	}

	&:hover {
		svg {
			path {
				fill: ${({ theme }) => theme.colors.button.hoverFill};
			}
		}
	}
`

export const ScrollableContent = styled.div`
	max-height: min(50vh, 700px);
	overflow-y: auto;
	padding: 0 2rem;
	margin: 2rem 0;
`

export const ActionsContainer = styled.div`
	margin: 2rem;
	display: flex;
	justify-content: flex-end;
`

type ScheduleSummaryContainerProps = { color?: string }
export const ScheduleSummaryContainer = styled.div<ScheduleSummaryContainerProps>`
	h6 {
		position: relative;
		::before {
			content: '';
			display: block;
			position: absolute;
			background: ${({ color = '#648de5' }) => color};
			border-radius: 0.5rem;
			width: 0.75rem;
			height: 0.75rem;
			left: -1.5rem;
			top: 50%;
			transform: translateY(-50%);
		}
	}
`

export const FormActionsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
	width: 60%;
`

export const DeleteActionsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 6.5rem;
`
