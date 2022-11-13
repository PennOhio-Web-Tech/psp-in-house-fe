import { Order } from '@src/@types/Menu'
import { useState } from 'react'
import { Menu } from '../Menu'
import { OrderDetails } from '../OrderDetails'
import { NewOrderGrid } from './NewOrderForm.styles'
import { FakeMenu } from '@src/constants/FakeMenu'

export function NewOrderForm() {
	const [order, setOrder] = useState<Order>([])

	return (
		<NewOrderGrid>
			<Menu order={order} setOrder={setOrder} menu={FakeMenu} />
			
			<OrderDetails order={order} setOrder={setOrder} />
		</NewOrderGrid>
	)
}
