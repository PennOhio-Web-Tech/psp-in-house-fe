import { Order } from '@src/@types/Menu'
import { nanoid } from 'nanoid'
import { Dispatch, SetStateAction } from 'react'
import { OrderItem } from '../OrderItem'
import { OrderTotal } from '../OrderTotal'
import { OrderDetailsDiv, OrderItemsDiv } from './OrderDetails.styles'

type OrderDetailsProps = { order: Order; setOrder: Dispatch<SetStateAction<Order>> }
export function OrderDetails({ order, setOrder }: OrderDetailsProps) {
	return (
		<OrderDetailsDiv>
			{/* some order info should probably go here... order # or something */}
			<OrderItemsDiv>
				{order.map((item, index) => {
					return (
						<OrderItem
							order={order}
							setOrder={setOrder}
							index={index}
							key={nanoid(4)}
						/>
					)
				})}
			</OrderItemsDiv>
			<OrderTotal order={order} setOrder={setOrder} />
		</OrderDetailsDiv>
	)
}
