import { Order, Pizza } from '@src/@types/Menu'
import { CashIcon, CreditCardIcon, PhoneIcon } from '@src/components/icons'
import { ErrorMessage, Flex } from '@src/styles/components'
import { currencyFormatter } from '@src/utils'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'
import {
	CostAndOrderActionsDiv,
	ErrorDiv,
	FlexFullWidth,
	GrandTotalDiv,
	IconBox,
	IconsDiv,
	PaymentDiv,
	PlaceOrderDiv,
	SubtotalDiv,
	TotalDiv,
} from './OrderTotal.styles'
import { addOrder } from '@src/services/api/order'
import { OrderCreateInput } from '@src/services/validators/orders'

type OrderDetailsProps = {
	order: Order
	pizzas: Pizza[]
	setOrder: Dispatch<SetStateAction<Order>>
	setPizzas: Dispatch<SetStateAction<Pizza[]>>
}
export function OrderTotal({ order, pizzas, setOrder, setPizzas }: OrderDetailsProps) {
	const [selected, setSelected] = useState('')
	const [wasSubmitted, setWasSubmitted] = useState(false)
	const { push } = useRouter()
	const TAX = 0.07
	function handleIconClick(type: 'cash' | 'card' | 'phone') {
		setSelected(type)
	}

	let subTotal = 0
	order.forEach(product => {
		subTotal = subTotal + product.product.price * product.quantity
	})
	pizzas.forEach(pizza => {
		const toppingsPrice = pizza.toppings.reduce((accumulator, value) => {
			return pizza.size === 'small' && value.priceSmall
				? accumulator + value.priceSmall
				: pizza.size === 'medium'
				? accumulator + value.priceMedium!
				: accumulator + value.priceLarge!
		}, 0)
		const price = pizza.price + toppingsPrice

		subTotal = subTotal + price
	})

	function getPizzaPrice(pizza: Pizza) {
		const toppingsPrice = pizza.toppings.reduce((accumulator, value) => {
			return pizza.size === 'small' && value.priceSmall
				? accumulator + value.priceSmall
				: pizza.size === 'medium' && value.priceMedium
				? accumulator + value.priceMedium
				: accumulator + value.priceLarge!
		}, 0)
		return pizza.price + toppingsPrice
	}

	const isThereFood = pizzas.length > 0 || order.length > 0

	const taxTotal = subTotal * TAX

	const addOrderMutation = useMutation(
		async (orderData: OrderCreateInput) => await addOrder(orderData),
		{
			onSuccess: () => {
				setPizzas([])
				setOrder([])
				setWasSubmitted(false)
				toast.success('Order has been placed successfully!')
				push('/orders')
			},
		}
	)
	async function handleSubmission() {
		const newOrder = {
			subtotal: subTotal,
			tax: taxTotal,
			total: subTotal + taxTotal,
			paidWith: selected,
			products: [
				...pizzas.map(pizza => {
					return {
						productName: `${pizza.size} pizza`,
						productPrice: getPizzaPrice(pizza),
						toppings: pizza.toppings.map(topping => topping.name),
					}
				}),
				...order.map(item => {
					return {
						productName: item.product.name,
						productPrice: item.product.price,
						toppings: [],
					}
				}),
			],
		}

		setWasSubmitted(true)
		try {
			if (isThereFood && selected !== '') {
				addOrderMutation.mutate(newOrder)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<CostAndOrderActionsDiv>
			<TotalDiv>
				<SubtotalDiv direction="column" gap="1rem">
					<FlexFullWidth justifyContent="space-between">
						<p>Subtotal</p>
						<h6>{currencyFormatter(subTotal)}</h6>
					</FlexFullWidth>
					<FlexFullWidth justifyContent="space-between">
						<p>Tax 7%</p>
						<h6>{currencyFormatter(taxTotal)}</h6>
					</FlexFullWidth>
				</SubtotalDiv>
				<GrandTotalDiv justifyContent="space-between">
					<h6>Total</h6>
					<h5>{currencyFormatter(taxTotal + subTotal)}</h5>
				</GrandTotalDiv>
			</TotalDiv>
			<ErrorDiv>
				{wasSubmitted === true && !isThereFood ? (
					<ErrorMessage>Please select food before placing an order.</ErrorMessage>
				) : null}
				{wasSubmitted === true && selected === '' ? (
					<ErrorMessage>Please select a payment type before submitting.</ErrorMessage>
				) : null}
			</ErrorDiv>
			<PaymentDiv direction="column" justifyContent="space-between">
				<div>
					<p>Payment Method</p>
					<IconsDiv justifyContent="center" alignItems="center" gap=".5rem">
						<Flex direction="column" alignItems="center" gap=".5rem">
							<IconBox
								justifyContent="center"
								alignItems="center"
								onClick={() => handleIconClick('cash')}
								isActive={selected === 'cash'}
							>
								<CashIcon />
							</IconBox>
							<p>Cash</p>
						</Flex>
						<Flex direction="column" alignItems="center" gap=".5rem">
							<IconBox
								justifyContent="center"
								alignItems="center"
								onClick={() => handleIconClick('card')}
								isActive={selected === 'card'}
							>
								<CreditCardIcon />
							</IconBox>
							<p>Card</p>
						</Flex>
						<Flex direction="column" alignItems="center" gap=".5rem">
							<IconBox
								justifyContent="center"
								alignItems="center"
								onClick={() => handleIconClick('phone')}
								isActive={selected === 'phone'}
							>
								<PhoneIcon />
							</IconBox>
							<p>Phone Pay</p>
						</Flex>
					</IconsDiv>
				</div>
				<PlaceOrderDiv justifyContent="center" onClick={() => handleSubmission()}>
					<p>Place Order</p>
				</PlaceOrderDiv>
			</PaymentDiv>
		</CostAndOrderActionsDiv>
	)
}
