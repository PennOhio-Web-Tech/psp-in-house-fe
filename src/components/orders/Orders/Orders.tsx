import { Spinner } from '@src/components/icons'
import { getOrders } from '@src/services/api/order'
import { ErrorMessage, Flex } from '@src/styles/components'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { OrderDialog } from '../OrderDialog'
import { CollapseDiv } from '../OrderDialog/OrderDialog.styles'
import { OrdersContainer, OrdersDiv } from './Orders.styles'
import { format } from 'date-fns'

export type OrderSubmissions = {
	id: string
	createdAt: string
	paidWith: string
	total: number
	subtotal: number
	tax: number
	orderProducts: {
		productName: string
		productPrice: number
		orderToppings: {
			toppingName: string
		}[]
	}[]
}
export function Orders() {
	const [isRecentCollapsed, setIsRecentCollapsed] = useState(false)
	const [isAllCollapsed, setIsAllCollapsed] = useState(true)

	const {
		isError,
		isLoading,
		data: orders,
	} = useQuery(['orders'], async () => {
		const res = await getOrders()
		const data = await res.json()
		return data.orders
	})

	function transformOrders(ordersToBeParsed: OrderSubmissions[]) {
		const recentOrders = ordersToBeParsed.map(order => {
			return {
				id: order.id,
				createdAt: format(new Date(order.createdAt), 'MM/dd/yyyy'),
				paidWith: order.paidWith,
				total: order.total,
				subtotal: order.subtotal,
				tax: order.tax,
				products: order.orderProducts?.map(product => {
					return {
						name: product.productName,
						price: product.productPrice,
						topping: product.orderToppings.map(topping => {
							return {
								name: topping.toppingName,
							}
						}),
					}
				}),
			}
		})
		return recentOrders
	}
	if (isLoading) {
		return <Spinner />
	}
	if (isError) {
		return <ErrorMessage>Could not find menu. Call tech support</ErrorMessage>
	}

	return (
		<OrdersContainer direction="column" gap="1rem">
			<Flex direction="column" gap="4rem">
				<Flex direction="column" gap="1rem">
					<Flex alignItems="flex-end" gap="1rem">
						<h4>Recent Orders</h4>
						<CollapseDiv onClick={() => setIsRecentCollapsed(!isRecentCollapsed)}>
							{isRecentCollapsed ? <p>+ expand</p> : <p>- collapse</p>}
						</CollapseDiv>
					</Flex>
					{isRecentCollapsed ? null : (
						<OrdersDiv>
							{transformOrders(orders).map(item => {
								return <OrderDialog order={item} />
							})}
						</OrdersDiv>
					)}
				</Flex>
				<Flex direction="column" gap="1rem">
					<Flex alignItems="flex-end" gap="1rem">
						<h4>All Orders</h4>
						<CollapseDiv onClick={() => setIsAllCollapsed(!isAllCollapsed)}>
							{isAllCollapsed ? <p>+ expand</p> : <p>- collapse</p>}
						</CollapseDiv>
					</Flex>
					{isAllCollapsed ? null : (
						<OrdersDiv>
							{transformOrders(orders).map(item => {
								return <OrderDialog order={item} />
							})}
						</OrdersDiv>
					)}
				</Flex>
			</Flex>
		</OrdersContainer>
	)
}
