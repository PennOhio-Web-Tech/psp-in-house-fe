import { Order } from '@src/@types/Menu'
import { CashIcon, CreditCardIcon, PhoneIcon } from '@src/components/icons'
import { Flex } from '@src/styles/components'
import { currencyFormatter } from '@src/utils'
import { Dispatch, SetStateAction } from 'react'
import {
	CostAndOrderActionsDiv,
	FlexFullWidth,
	GrandTotalDiv,
	IconBox,
	IconsDiv,
	PaymentDiv,
	PlaceOrderDiv,
	SubtotalDiv,
	TotalDiv,
} from './OrderTotal.styles'

type OrderDetailsProps = { order: Order; setOrder: Dispatch<SetStateAction<Order>> }
export function OrderTotal({ order, setOrder }: OrderDetailsProps) {
	const TAX = 0.07
	let subTotal = 0
	order.forEach(product => {
		subTotal = subTotal + product.product.price * product.quantity
	})
	const taxTotal = subTotal * TAX
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
			<PaymentDiv direction="column" justifyContent="space-between">
				<div>
					<p>Payment Method</p>
					<IconsDiv justifyContent="center" gap=".5rem">
						<Flex direction="column" alignItems="center" gap=".5rem">
							<IconBox justifyContent="center" alignItems="center">
								<CashIcon />
							</IconBox>
							<p>Cash</p>
						</Flex>
						<Flex direction="column" alignItems="center" gap=".5rem">
							<IconBox justifyContent="center" alignItems="center">
								<CreditCardIcon />
							</IconBox>
							<p>Card</p>
						</Flex>
						<Flex direction="column" alignItems="center" gap=".5rem">
							<IconBox justifyContent="center" alignItems="center">
								<PhoneIcon />
							</IconBox>
							<p>Phone Pay</p>
						</Flex>
					</IconsDiv>
				</div>
				<PlaceOrderDiv justifyContent="center">
					<p>Place Order</p>
				</PlaceOrderDiv>
			</PaymentDiv>
		</CostAndOrderActionsDiv>
	)
}
