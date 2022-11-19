import { FakeOrders } from '@src/constants/FakeOrders'
import { Flex } from '@src/styles/components'
import { useState } from 'react'
import { OrderDialog } from '../OrderDialog'
import { CollapseDiv } from '../OrderDialog/OrderDialog.styles'
import { OrdersContainer, OrdersDiv } from './Orders.styles'
export function Orders() {
	const [isRecentCollapsed, setIsRecentCollapsed] = useState(false)
	const [isAllCollapsed, setIsAllCollapsed] = useState(true)

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
							{FakeOrders.map(item => {
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
							{FakeOrders.map(item => {
								return <OrderDialog order={item} />
							})}
						</OrdersDiv>
					)}
				</Flex>
			</Flex>
		</OrdersContainer>
	)
}
