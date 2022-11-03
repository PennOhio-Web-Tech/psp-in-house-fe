import * as RadioGroup from '@radix-ui/react-radio-group'
import { StarIcon } from '@src/components/icons'
import { FieldErrorMessage } from '@src/styles/components'
import { useState } from 'react'
import styled from 'styled-components'
import { ZodSchema } from 'zod'

type RatingProps = {
	wasSubmitted: boolean
	name: string
	validator?: ZodSchema
	disabled?: boolean
}
export function Rating({ wasSubmitted, validator, name, disabled = false }: RatingProps) {
	const [value, setValue] = useState('0')
	let errorMessage

	if (validator) {
		const validatedInput = validator.safeParse(Number(value))

		if (!validatedInput.success) {
			errorMessage = validatedInput.error.issues[0].message
		}
	}

	const displayErrorMessage = wasSubmitted && errorMessage

	return (
		<>
			<RadioGroupRoot value={value} onValueChange={setValue} name={name}>
				{Array.from({ length: 5 }, (_, i) => {
					const starValue = i + 1
					return (
						<RadioGroupItem
							key={starValue}
							value={String(starValue)}
							defaultValue="0"
							disabled={disabled}
						>
							{starValue <= Number(value) ? (
								<StarIcon fill="#648DE5" />
							) : (
								<StarIcon />
							)}
						</RadioGroupItem>
					)
				})}
			</RadioGroupRoot>
			{displayErrorMessage ? <FieldErrorMessage>{errorMessage}</FieldErrorMessage> : null}
		</>
	)
}

const RadioGroupRoot = styled(RadioGroup.Root)`
	display: flex;
	width: min(320px, 88vw);
	justify-content: space-between;
	margin-top: 0.5rem;
	padding: 0.25rem;
`

const RadioGroupItem = styled(RadioGroup.Item)`
	all: unset;
	display: flex;
`
