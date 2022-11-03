import { FieldErrorMessage, Textarea } from '@src/styles/components'
import { ChangeEvent, useState } from 'react'
import { ZodSchema } from 'zod'

type FastTextareaProps =
	| {
			wasSubmitted: boolean
			name: string
			autofocus?: boolean
			validator?: ZodSchema | null
			required?: boolean
			defaultValue?: string
			placeholder?: string
			errorOnBlur?: boolean
			disabled?: boolean
	  }
	| {
			wasSubmitted: boolean
			name: string
			autofocus?: boolean
			validator?: ZodSchema | null
			required: boolean
			defaultValue?: string
			placeholder?: string
			errorOnBlur?: boolean
			disabled?: boolean
	  }

export function FastTextarea({
	validator = undefined,
	wasSubmitted,
	name,
	autofocus = false,
	required = false,
	defaultValue = '',
	placeholder,
	errorOnBlur = true,
	disabled = false,
}: FastTextareaProps) {
	const [value, setValue] = useState(defaultValue)
	const [touched, setTouched] = useState(false)
	let errorMessage: string | undefined = undefined

	if (validator) {
		const validatedInput = validator.safeParse(value)
		if (!validatedInput.success) {
			errorMessage = validatedInput.error.issues[0].message
		}
	}
	const displayErrorMessage = (wasSubmitted || (touched && errorOnBlur)) && errorMessage

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setValue(event.target.value)
	}

	function handleBlur() {
		setTouched(true)
	}

	return (
		<>
			<Textarea
				id={name}
				name={name}
				onChange={handleChange}
				onBlur={handleBlur}
				required={required}
				value={value}
				autoFocus={autofocus}
				placeholder={placeholder}
				disabled={disabled}
			/>
			{displayErrorMessage ? <FieldErrorMessage>{errorMessage}</FieldErrorMessage> : null}
		</>
	)
}
