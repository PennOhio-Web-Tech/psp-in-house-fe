import { Pizza } from '@src/@types/Menu'
import { PizzaIcon, TrashIcon } from '@src/components/icons'
import { Flex } from '@src/styles/components'
import { capitalizeFirstLetter, currencyFormatter } from '@src/utils'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { OrderItemDiv } from '../OrderItem/OrderItem.styles'

type PizzaItemProps = {
	index: number
	pizzas: Pizza[]
	setPizzas: Dispatch<SetStateAction<Pizza[]>>
}
export function PizzaItem({ pizzas, setPizzas, index }: PizzaItemProps) {
	const toppingsPrice = pizzas[index]?.toppings?.reduce((accumulator, value) => {
		return pizzas[index]?.size === 'small'
			? accumulator + value.priceSmall!
			: pizzas[index]?.size === 'medium'
			? accumulator + value.priceMedium!
			: accumulator + value.priceLarge!
	}, 0)
	const price = pizzas[index]?.price + toppingsPrice

	function handleDelete() {
		const newPizzas = [...pizzas]
		newPizzas.splice(index, 1)
		setPizzas(newPizzas)
	}

	return (
		<TrashFlex justifyContent="center" alignItems="center" gap="1rem">
			<TrashIcon onClick={() => handleDelete()} />
			<OrderItemDiv alignItems="center" justifyContent="space-between">
				<Flex gap="1rem" justifyContent="flex-start">
					<PizzaIcon />
					<p>
						{capitalizeFirstLetter(pizzas[index].size)} w/{' '}
						{pizzas[index].toppings.length} toppings
					</p>
					<p></p>
				</Flex>
				<h6>{currencyFormatter(price)}</h6>
			</OrderItemDiv>
		</TrashFlex>
	)
}
const TrashFlex = styled(Flex)`
	div {
		/* width: 100%; */
	}
	svg {
		:first-of-type {
			:hover {
				path {
					fill: red;
				}
			}
		}
	}
`
