import { Pizza, Product, Topping } from '@src/@types/Menu'
import { Checkbox, CheckboxIndicator } from '@src/components/common/Checkbox'
import { Dialog, DialogContent, DialogTrigger } from '@src/components/common/Dialog'
import { AddIcon, CheckIcon } from '@src/components/icons'
import { theme } from '@src/styles'
import { Button, Flex } from '@src/styles/components'
import { currencyFormatter } from '@src/utils'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import styled from 'styled-components'

type ToppingsModalProps = {
	item: Product
	toppings: Topping[]
	size: 'small' | 'medium' | 'large'
	pizzas: Pizza[]
	setPizzas: Dispatch<SetStateAction<Pizza[]>>
}
export function ToppingsModal({ toppings, size, item, pizzas, setPizzas }: ToppingsModalProps) {
	const [isOpen, setIsOpen] = useState(false)
	console.log(pizzas)
	function handleAddToppings(toppingsToAdd: Topping[]) {
		setPizzas([...pizzas, { size: size, toppings: toppingsToAdd, price: item.price }])
	}
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const fields = Object.fromEntries(formData.entries())
		const toppingsToPass = toppings.filter(topping =>
			Object.keys(fields).includes(topping.name)
		)
		handleAddToppings(toppingsToPass)
		setIsOpen(false)
	}
	return (
		<Dialog open={isOpen}>
			<DialogTrigger asChild>
				<AddIcon onClick={() => setIsOpen(true)} />
			</DialogTrigger>
			<DialogContent
				title="Toppings"
				description="Select the toppings the customer would like on the pizza."
				onClose={() => {
					setIsOpen(false)
				}}
				preferredWidth="500px"
			>
				<form onSubmit={handleSubmit}>
					<ToppingsContainer gap="1.5rem" direction="column">
						<Flex gap="1rem" direction="column">
							{toppings.map(topping => {
								const price =
									size === 'small'
										? topping.priceSmall
										: size === 'medium'
										? topping.priceMedium
										: topping.priceLarge
								return (
									<Flex gap="1rem">
										<Checkbox name={topping.name}>
											<CheckboxIndicator>
												<CheckIcon fill={theme.colors.pageUi.selected} />
											</CheckboxIndicator>
										</Checkbox>
										<h6>{topping.name}</h6>
										<p>{currencyFormatter(price)}</p>
									</Flex>
								)
							})}
						</Flex>
						<Button variant="white" type="submit">
							Select Toppings
						</Button>
					</ToppingsContainer>
				</form>
			</DialogContent>
		</Dialog>
	)
}

const ToppingsContainer = styled(Flex)`
	padding: 2rem;
`
