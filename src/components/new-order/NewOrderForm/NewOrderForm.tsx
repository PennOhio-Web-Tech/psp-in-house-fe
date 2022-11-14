import { Order } from '@src/@types/Menu'
import { useState } from 'react'
import { OrderDetails } from '../OrderDetails'
import { NewOrderGrid } from './NewOrderForm.styles'
import { FakeMenu } from '@src/constants/FakeMenu'
import { Menu } from '@src/components/common/Menu'

export function NewOrderForm() {
	const [order, setOrder] = useState<Order>([])

	return (
		<NewOrderGrid>
			<div>
				<h2>Create New Order</h2>
				<Menu order={order} setOrder={setOrder} menu={FakeMenu} />
			</div>
			<OrderDetails order={order} setOrder={setOrder} />
		</NewOrderGrid>
	)
}
