import { Order, Pizza } from '@src/@types/Menu'
import { nanoid } from 'nanoid'
import { Dispatch, SetStateAction } from 'react'
import { OrderItem } from '../OrderItem'
import { OrderTotal } from '../OrderTotal'
import { PizzaItem } from '../PizzaItem'
import { OrderDetailsDiv, OrderItemsDiv } from './OrderDetails.styles'

type OrderDetailsProps = {
	order: Order
	pizzas: Pizza[]
	setOrder: Dispatch<SetStateAction<Order>>
	setPizzas: Dispatch<SetStateAction<Pizza[]>>
}
export function OrderDetails({ order, setOrder, pizzas, setPizzas }: OrderDetailsProps) {
	return (
		<OrderDetailsDiv>
			{/* some order info should probably go here... order # or something */}
			<OrderItemsDiv>
				{pizzas.map((pizza, index) => {
					return (
						<PizzaItem
							index={index}
							key={nanoid(4)}
							pizzas={pizzas}
							setPizzas={setPizzas}
						/>
					)
				})}
				{order.map((item, index) => {
					return (
						<OrderItem
							order={order}
							setOrder={setOrder}
							index={index}
							pizzas={pizzas}
							key={nanoid(4)}
						/>
					)
				})}
			</OrderItemsDiv>
			<OrderTotal order={order} pizzas={pizzas} setOrder={setOrder} setPizzas={setPizzas} />
		</OrderDetailsDiv>
	)
}
