import { Order, Pizza, Product } from '@src/@types/Menu'
import { AddIcon, MinusIcon } from '@src/components/icons'
import { capitalizeFirstLetter, currencyFormatter } from '@src/utils'
import { Dispatch, SetStateAction } from 'react'
import { ToppingsModal } from '../ToppingsModal'
import { ActionFlex, MenuProductItemDiv } from './MenuProductOrderItem.styles'

type MenuProductItemProps = {
	item: Product
	order: Order
	setOrder: Dispatch<SetStateAction<Order>>
	pizzas: Pizza[]
	setPizzas: Dispatch<SetStateAction<Pizza[]>>
}
export function MenuProductOrderItem({
	item,
	setOrder,
	order,
	pizzas,
	setPizzas,
}: MenuProductItemProps) {
	const internalOrder = order.find(orderItem => orderItem.product.name === item.name)
	function handleAdd() {
		const indexToChange = order.findIndex(orderItem => orderItem.product.name === item.name)
		if (indexToChange > -1) {
			const newOrder = [...order]
			newOrder[indexToChange].quantity += 1
			setOrder(newOrder)
		} else {
			setOrder([...order, { product: item, quantity: 1 }])
		}
	}
	function handleSubtract() {
		const indexToChange = order.findIndex(orderItem => orderItem.product.name === item.name)
		if (indexToChange > -1) {
			let newOrder = [...order]

			newOrder[indexToChange].quantity -= 1

			const arrayToSet = newOrder.filter(item => item.quantity !== 0)

			setOrder(arrayToSet)
		}
	}
	return (
		<MenuProductItemDiv>
			<div>
				<h4>{capitalizeFirstLetter(item.name)}</h4>
				<p>{currencyFormatter(item.price)}</p>
			</div>
			<ActionFlex justifyContent="flex-end" gap=".75rem" alignItems="center">
				{item.topping.length > 1 ? null : (
					<>
						<MinusIcon
							onClick={() => {
								handleSubtract()
							}}
						/>
						<h6>{internalOrder ? internalOrder.quantity : 0}</h6>
					</>
				)}
				{item.topping.length > 1 ? (
					<ToppingsModal
						item={item}
						pizzas={pizzas}
						setPizzas={setPizzas}
						size={
							item.name.includes('small')
								? 'small'
								: item.name.includes('medium')
								? 'medium'
								: 'large'
						}
						toppings={item.topping}
					/>
				) : (
					<AddIcon
						onClick={() => {
							handleAdd()
						}}
					/>
				)}
			</ActionFlex>
		</MenuProductItemDiv>
	)
}
