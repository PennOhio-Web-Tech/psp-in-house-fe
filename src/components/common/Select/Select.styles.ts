import { Listbox } from '@headlessui/react'
import styled, { css } from 'styled-components'

export const ListboxButton = styled(Listbox.Button)`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 4px;
	padding: 0 1rem;
	height: 54.5px;
	font-size: 1rem;
	background-color: white;
	box-sizing: border-box;
	border: 1px solid ${({ theme }) => theme.colors.pageUi.sectionDivider};
	cursor: pointer;

	:disabled {
		background: #ededed;
		color: ${({ theme }) => theme.colors.neutral[70]};
		cursor: not-allowed;
		svg {
			path {
				fill: ${({ theme }) => theme.colors.pageUi.sectionDivider};
			}
		}
	}

	&.placeholder {
		color: ${({ theme }) => theme.colors.text.secondary};
	}

	span:first-of-type {
		@media (max-width: 1090px) {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			max-width: 200px;
		}

		@media (max-width: 1024px) {
			overflow: auto;
			text-overflow: unset;
			display: flex;
			-webkit-line-clamp: unset;
			-webkit-box-orient: unset;
			max-width: unset;
		}
	}

	span:last-of-type {
		display: grid;
		place-items: center;
	}

	&:focus {
		box-shadow: 0 0 0 2px #007aff;
	}
`

type ListOptionsProps = {
	maxHeight?: number
}

type ListboxOptionsProps = {
	optionsPosition?: 'bottom' | 'top'
}

export const ListboxOptionsWrapper = styled.div<ListboxOptionsProps>`
	ul {
		position: absolute;
		width: 100%;
		z-index: 100;
		top: 102%;

		${({ optionsPosition = 'bottom' }) => {
			if (optionsPosition === 'top') {
				return css`
					bottom: 74%;
					top: unset;
				`
			}
		}}
	}
`

export const ListboxOptions = styled(Listbox.Options)``

export const ListboxOptionsContainer = styled.div`
	background: white;
	border-radius: 0.25rem;
	overflow-y: auto;

	${({ maxHeight }: ListOptionsProps) => css`
		max-height: ${maxHeight}px;
	`}

	border: 1px solid ${({ theme }) => theme.colors.pageUi.sectionDivider};

	box-shadow: ${({ theme }) => theme.shadows.small};
`

type StyledLiProps = {
	isActive: boolean
	isSelected: boolean
	isDisabled?: boolean
}

export const StyledSpan = styled.span`
	all: unset;
	font-size: 1rem;
	display: flex;
	padding: 1rem;
	user-select: none;
	cursor: pointer;
	border-radius: 0.25rem;

	&:hover,
	&:focus,
	&:active {
		background: #f1f1f1;
		&[data-disabled] {
			background: white;
			cursor: unset;
		}
	}

	&[data-disabled] {
		color: ${({ theme }) => theme.colors.neutral[60]};
	}

	${({ isActive, isSelected }: StyledLiProps) => {
		if (isActive) {
			return css`
				background: #f1f1f1;
			`
		}

		if (isSelected) {
			return css`
				background: #f1f1f1;
			`
		}
	}}
`

export const ListboxButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`
