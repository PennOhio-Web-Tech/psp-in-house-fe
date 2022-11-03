import { ChangeEvent, useState } from 'react'

import { FieldErrorMessage, Input } from '@src/styles/components'
import { ZodSchema } from 'zod'

type FastInputProps =
	| {
			wasSubmitted: boolean
			name: string
			type?: string
			validator?: ZodSchema | null
			required?: false
			id?: string
			defaultValue?: string
			isNumber?: boolean
			parser?: (value: string) => string
			placeholder?: string
			disabled?: boolean
	  }
	| {
			wasSubmitted: boolean
			name: string
			type?: string
			id?: string
			validator: ZodSchema | null
			required: true
			defaultValue?: string
			parser?: (value: string) => string
			placeholder?: string
			disabled?: boolean
	  }

export function FastInput({
	validator = undefined,
	wasSubmitted,
	name,
	id,
	type = 'text',
	required = false,
	defaultValue = '',
	parser = (value: string) => value,
	placeholder,
	disabled = false,
}: FastInputProps) {
	const [value, setValue] = useState(defaultValue)
	const [touched, setTouched] = useState(false)
	let errorMessage: string | undefined = undefined

	if (validator) {
		const validatedInput = validator.safeParse(value)

		if (!validatedInput.success) {
			errorMessage = validatedInput.error.issues[0].message
		}
	}

	const displayErrorMessage = (wasSubmitted || touched) && errorMessage

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		if (type === 'number') {
			setValue(event.target.value.replace(/[^0-9]/g, ''))
		} else {
			setValue(event.target.value)
		}
	}

	function handleBlur() {
		setTouched(true)
	}

	return (
		<>
			<Input
				id={name}
				name={name}
				type={type === 'number' ? 'text' : type}
				onChange={handleChange}
				onBlur={handleBlur}
				required={required}
				value={parser(value)}
				placeholder={placeholder}
				disabled={disabled}
			/>
			{displayErrorMessage ? <FieldErrorMessage>{errorMessage}</FieldErrorMessage> : null}
		</>
	)
}
