import { CircularAddIcon } from '@src/components/icons'
import { GridInputsContainer, Label } from '@src/styles/components'
import { useEffect, useState } from 'react'
import {
	AddNewTopping,
	StyledTrashIcon,
	ToppingInputContainer,
	ToppingsInputList,
} from './ToppingSection.styles'

type Topping = { content: string }

export function ToppingSection() {
	const [toppings, setToppings] = useState<Topping[]>([])
	const [shouldFocus, setShouldFocus] = useState(false)

	function removeToppingField(index: number) {
		const newToppings = [...toppings]
		newToppings.splice(index, 1)
		setToppings(newToppings)
	}

	function addToppingField() {
		setToppings([...toppings, { content: '' }])
		setShouldFocus(true)
	}
	useEffect(
		function focusOnAddNewTopping() {
			if (shouldFocus) {
				document
					.querySelector<HTMLInputElement>(`[name=topping${toppings.length}]`)
					?.focus()
				setShouldFocus(false)
			}
		},
		[shouldFocus, toppings]
	)
	return (
		<>
			<Label>Toppings</Label>
			<ToppingsInputList>
				{toppings.map((topping, index) => {
					return (
						<GridInputsContainer key={index}>
							<ToppingInputContainer>
								<StyledTrashIcon onClick={() => removeToppingField(index)} />
							</ToppingInputContainer>
						</GridInputsContainer>
					)
				})}
				<GridInputsContainer>
					<ToppingInputContainer>
						<AddNewTopping
							id="add-topping-button"
							type="button"
							onClick={addToppingField}
						>
							<CircularAddIcon fill="rgb(158, 158, 158)" /> Add Topping
						</AddNewTopping>
						<div />
					</ToppingInputContainer>
				</GridInputsContainer>
			</ToppingsInputList>
		</>
	)
}
