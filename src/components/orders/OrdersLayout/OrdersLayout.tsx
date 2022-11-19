import { Orders } from '../Orders/Orders'
import { OrdersLayoutContainer } from './OrdersLayout.styles'

export function OrdersLayout() {
	return (
		<OrdersLayoutContainer>
			<h2>Orders</h2>
			<Orders />
		</OrdersLayoutContainer>
	)
}
