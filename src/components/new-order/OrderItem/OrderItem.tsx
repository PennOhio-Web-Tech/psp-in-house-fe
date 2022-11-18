import { Order, Pizza } from '@src/@types/Menu'
import { Flex } from '@src/styles/components'
import { currencyFormatter } from '@src/utils'
import { Dispatch, SetStateAction } from 'react'
import { BlackCircle, OrderItemDiv } from './OrderItem.styles'

type OrderItemProps = {
	order: Order
	pizzas: Pizza[]
	setOrder: Dispatch<SetStateAction<Order>>
	index: number
}
export function OrderItem({ order, setOrder, pizzas, index }: OrderItemProps) {
	const price = currencyFormatter(order[index].product.price * order[index].quantity)
	return (
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
	)
}
