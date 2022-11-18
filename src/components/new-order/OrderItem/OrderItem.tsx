import { Order, Pizza } from '@src/@types/Menu'
import { TrashIcon } from '@src/components/icons'
import { Flex } from '@src/styles/components'
import { currencyFormatter } from '@src/utils'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { BlackCircle, OrderItemDiv } from './OrderItem.styles'

type OrderItemProps = {
	order: Order
	pizzas: Pizza[]
	setOrder: Dispatch<SetStateAction<Order>>
	index: number
}
export function OrderItem({ order, setOrder, pizzas, index }: OrderItemProps) {
	function handleDelete() {
		const newOrder = [...order]
		newOrder.splice(index, 1)
		setOrder(newOrder)
	}

	const price = currencyFormatter(order[index].product.price * order[index].quantity)
	return (
		<TrashFlex justifyContent="center" alignItems="center" gap="1rem">
			<TrashIcon onClick={() => handleDelete()} />
			<OrderItemDiv alignItems="center" justifyContent="space-between">
				<Flex gap="1rem">
					<BlackCircle justifyContent="center" alignItems="center">
						{index + 1 + pizzas.length}
					</BlackCircle>
					<p>
						{order[index].product.name} <span>x{order[index].quantity}</span>
					</p>
				</Flex>
				<h6>{price}</h6>
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
