import { Menu as MenuType, Order, Pizza } from '@src/@types/Menu'
import { useState } from 'react'
import { OrderDetails } from '../OrderDetails'
import { NewOrderGrid } from './NewOrderForm.styles'
import { Menu } from '@src/components/common/Menu'
import { useQuery } from '@tanstack/react-query'
import { getMenu } from '@src/services/api/menu'
import { Spinner } from '@src/components/icons'
import { ErrorMessage } from '@src/styles/components'

export function NewOrderForm() {
	const [order, setOrder] = useState<Order>([])
	const [pizzas, setPizzas] = useState<Pizza[]>([])
	const {
		isError,
		isLoading,
		data: menu,
	} = useQuery(['menu'], async () => {
		const res = await getMenu()
		const data = await res.json()
		return data.menu[0].categories as MenuType
	})

	if (isLoading) {
		return <Spinner />
	}
	if (isError) {
		return <ErrorMessage>Could not find menu. Call tech support</ErrorMessage>
	}

	return (
		<NewOrderGrid>
			<div>
				<h2>Create New Order</h2>
				<Menu
					order={order}
					setOrder={setOrder}
					menu={menu}
					pizzas={pizzas}
					setPizzas={setPizzas}
				/>
			</div>
			<OrderDetails order={order} setOrder={setOrder} pizzas={pizzas} setPizzas={setPizzas} />
		</NewOrderGrid>
	)
}
