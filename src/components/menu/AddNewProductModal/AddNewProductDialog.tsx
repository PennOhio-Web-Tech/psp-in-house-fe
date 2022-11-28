import { Dialog, DialogContent, DialogTrigger } from '@src/components/common/Dialog'
import { CircularAddIcon } from '@src/components/icons'
import { addProduct, AddProductType } from '@src/services/api/menu'
import { Button, Fieldset, Input, Label, Textarea } from '@src/styles/components'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import {
	ActionContainer,
	AddNewProductCard,
	CurrencyWrapper,
	FormContainer,
	NumberInputsContainer,
} from './AddNewProductDialog.styles'

type AddNewProductCardDialogProps = { category: string; categoryId: string }
export function AddNewProductCardDialog({ category, categoryId }: AddNewProductCardDialogProps) {
	const [isOpen, setIsOpen] = useState(false)
	const queryClient = useQueryClient()

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const fields = Object.fromEntries(formData.entries())

		const productData: AddProductType = {
			name: fields['name'] as string,
			description: fields['description'] as string,
			price: fields['price'] as string,
			id: categoryId,
		}
		addPriceMutation.mutate(productData)
	}
	const addPriceMutation = useMutation(
		async (productData: AddProductType) => await addProduct(productData),
		{
			onSuccess: () => {
				toast.success('Product has been added successfully!')
				setIsOpen(false)
				queryClient.invalidateQueries(['menu'])
			},
		}
	)
	return (
		<Dialog open={isOpen}>
			<DialogTrigger asChild>
				<AddNewProductCard onClick={() => setIsOpen(true)}>
					<CircularAddIcon />
					<h6>Add New Product</h6>
				</AddNewProductCard>
			</DialogTrigger>
			<DialogContent
				title="Add a new product"
				description="Please enter all of the information regarding the new product"
				onClose={() => {
					setIsOpen(false)
				}}
			>
				<form onSubmit={handleSubmit}>
					<FormContainer>
						<Fieldset>
							<Label htmlFor="name">Name</Label>
							<Input name="name" />
						</Fieldset>

						<Fieldset>
							<Label htmlFor="description">Description</Label>
							<Textarea name="description" />
						</Fieldset>
						<NumberInputsContainer>
							<Fieldset>
								<Label htmlFor="price">Price</Label>
								<CurrencyWrapper>
									<span>$</span>
									<Input
										type="number"
										name="price"
										step=".01"
										min="0"
										max="2500"
									/>
								</CurrencyWrapper>
							</Fieldset>
						</NumberInputsContainer>
						{/* <ToppingSection /> */}
					</FormContainer>
					<ActionContainer justifyContent="flex-end">
						<Button variant="white" type="submit">
							Add Product
						</Button>
					</ActionContainer>
				</form>
			</DialogContent>
		</Dialog>
	)
}
