import { Dialog, DialogContent, DialogTrigger } from '@src/components/common/Dialog'
import { deleteOrder } from '@src/services/api/order'
import { Button, Flex } from '@src/styles/components'
import { capitalizeFirstLetter, currencyFormatter } from '@src/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import {
	ContentContainer,
	FullLengthFlex,
	OrderTriggerDiv,
	ProductContainer,
	ProductsFlex,
} from './OrderDialog.styles'

export type Order = {
	id: string
	createdAt: string
	paidWith: string
	total: number
	subtotal: number
	tax: number
	products: {
		name: string
		price: number
		topping: {
			name: string
		}[]
	}[]
}

type OrderDialogProps = { order: Order }

export function OrderDialog({ order }: OrderDialogProps) {
	const [isOpen, setIsOpen] = useState(false)

	const queryClient = useQueryClient()

	function fulfilledHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault()
		fulfilledMutation.mutate()
		setIsOpen(false)
	}

	const fulfilledMutation = useMutation(async () => await deleteOrder(order.id), {
		onSuccess: () => {
			queryClient.invalidateQueries(['orders'])
		},
	})
	return (
		<Dialog open={isOpen}>
			<DialogTrigger asChild>
				<OrderTriggerDiv
					onClick={() => setIsOpen(true)}
					direction="column"
					justifyContent="flex-start"
					gap="1rem"
				>
					{/* time */}
					<h5>{currencyFormatter(order.total)}</h5>
					{/* date */}
					<div>
						<p>{order.createdAt}</p>
						<p>{order.products?.length} items</p>
					</div>
				</OrderTriggerDiv>
			</DialogTrigger>
			<DialogContent
				title={order.createdAt}
				noDescription
				onClose={() => {
					setIsOpen(false)
				}}
			>
				<ContentContainer>
					<ProductsFlex direction="column" gap="1rem">
						{order.products?.map(product => {
							return (
								<ProductContainer>
									<div>
										<h6>{capitalizeFirstLetter(product.name)}</h6>
										{product.topping.map(topping => {
											return <p>{capitalizeFirstLetter(topping.name)}</p>
										})}
									</div>
									<div>
										<h5>{currencyFormatter(product.price)}</h5>
									</div>
								</ProductContainer>
							)
						})}
					</ProductsFlex>
					<Flex>
						<FullLengthFlex direction="column" justifyContent="flex-end" gap="1rem">
							<p>{`Paid with ${order.paidWith}`}</p>
							<Button
								onClick={e => {
									fulfilledHandler(e)
								}}
								variant="white"
							>
								Fulfilled
							</Button>
						</FullLengthFlex>
						<Flex direction="column">
							<Flex gap="2rem">
								<Flex direction="column" gap="1rem" alignItems="flex-end">
									<Flex direction="column" alignItems="flex-end">
										<h6>Subtotal</h6>
										<h6>Tax</h6>
									</Flex>
									<h4>Total</h4>
								</Flex>
								<Flex direction="column">
									<Flex direction="column" gap="1rem">
										<div>
											<h6>{currencyFormatter(order.subtotal)}</h6>
											<h6>{currencyFormatter(order.tax)}</h6>
										</div>
										<h4>{currencyFormatter(order.total)}</h4>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</ContentContainer>
			</DialogContent>
		</Dialog>
	)
}
