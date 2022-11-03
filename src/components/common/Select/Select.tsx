import { ReactNode, useState } from 'react'
import { Listbox } from '@headlessui/react'

import { ChevronDownIcon } from '@src/components/icons'
import { FieldErrorMessage } from '@src/styles/components'

import {
	ListboxButton,
	ListboxButtonContainer,
	ListboxOptions,
	ListboxOptionsContainer,
	ListboxOptionsWrapper,
	StyledSpan,
} from './Select.styles'
import { ZodSchema } from 'zod'

type FastSelectProps =
	| {
			children: ReactNode
			wasSubmitted: boolean
			defaultValue: { display: string; value: string }
			name: string
			maxHeight?: number
			required?: false
			validator?: ZodSchema | null
			id?: string
			disabled?: boolean
			optionsPosition?: 'bottom' | 'top'
	  }
	| {
			children: ReactNode
			wasSubmitted: boolean
			defaultValue: { display: string; value: string }
			name: string
			maxHeight?: number
			required: true
			validator?: ZodSchema | null
			id?: string
			disabled?: boolean
			optionsPosition?: 'bottom' | 'top'
	  }

export function FastSelect({
	children,
	defaultValue,
	name,
	maxHeight,
	validator = undefined,
	wasSubmitted,
	disabled,
	optionsPosition = 'bottom',
	id,
}: FastSelectProps) {
	const [selected, setSelected] = useState(defaultValue)
	let errorMessage: string | undefined = undefined

	if (validator) {
		const validatedInput = validator.safeParse(selected.value)
		if (!validatedInput.success) {
			errorMessage = validatedInput.error.issues[0].message
		}
	}
	const displayErrorMessage = Boolean(wasSubmitted && errorMessage)

	return (
		<>
			<Listbox value={selected} onChange={setSelected} name={name} disabled={disabled}>
				<ListboxButton>
					<ListboxButtonContainer id={id}>
						{selected.display}
						<ChevronDownIcon />
					</ListboxButtonContainer>
				</ListboxButton>
				<ListboxOptionsWrapper optionsPosition={optionsPosition}>
					<ListboxOptions>
						<ListboxOptionsContainer maxHeight={maxHeight}>
							{children}
						</ListboxOptionsContainer>
					</ListboxOptions>
				</ListboxOptionsWrapper>
			</Listbox>
			{displayErrorMessage ? <FieldErrorMessage>{errorMessage}</FieldErrorMessage> : null}
		</>
	)
}

type SelectProps = {
	children: ReactNode
	name: string
	id?: string
	maxHeight: number
	value: { display: string; value: string }
	onChange: (value: { value: string; display: string }) => void
	optionsPosition?: 'bottom' | 'top'
}

export function Select({
	children,
	name,
	maxHeight,
	value,
	id,
	onChange,
	optionsPosition = 'bottom',
}: SelectProps) {
	return (
		<>
			<Listbox value={value} onChange={onChange} name={name}>
				<ListboxButton>
					<ListboxButtonContainer id={id}>
						{value.display}
						<ChevronDownIcon />
					</ListboxButtonContainer>
				</ListboxButton>
				<ListboxOptionsWrapper optionsPosition={optionsPosition}>
					<ListboxOptions>
						<ListboxOptionsContainer maxHeight={maxHeight}>
							{children}
						</ListboxOptionsContainer>
					</ListboxOptions>
				</ListboxOptionsWrapper>
			</Listbox>
		</>
	)
}

type SelectOptionProps = {
	value: { display: string; value: string }
	disabled?: boolean
	id?: string
}

export function SelectItem({ value, disabled, id }: SelectOptionProps) {
	return (
		<Listbox.Option value={value}>
			{({ active, selected }) => {
				return (
					<StyledSpan
						id={id}
						isActive={active}
						isSelected={selected}
						isDisabled={disabled}
					>
						{value.display}
					</StyledSpan>
				)
			}}
		</Listbox.Option>
	)
}
