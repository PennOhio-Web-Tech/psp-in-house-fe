import { Order, Product } from '@src/@types/Menu'
import { AddIcon, MinusIcon } from '@src/components/icons'
import { currencyFormatter } from '@src/utils'
import { Dispatch, SetStateAction } from 'react'
import { ActionFlex, MenuProductItemDiv } from './MenuProductItem.styles'

type MenuProductItemProps = {
	item: Product
	order: Order
	setOrder: Dispatch<SetStateAction<Order>>
}
export function MenuProductItem({ item, setOrder, order }: MenuProductItemProps) {
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
	console.log(order)
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
				<h4>{item.name}</h4>
				<p>{currencyFormatter(item.price)}</p>
			</div>
			<ActionFlex justifyContent="flex-end" gap=".75rem" alignItems="center">
				<MinusIcon
					onClick={() => {
						handleSubtract()
					}}
				/>
				<h6>{internalOrder ? internalOrder.quantity : 0}</h6>
				<AddIcon
					onClick={() => {
						handleAdd()
					}}
				/>
			</ActionFlex>
		</MenuProductItemDiv>
	)
}
