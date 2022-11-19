import { Dialog, DialogContent, DialogTrigger } from '@src/components/common/Dialog'
import { CircularAddIcon } from '@src/components/icons'
import { Button, Fieldset, Input, Label, Textarea } from '@src/styles/components'
import { FormEvent, useState } from 'react'
import { ToppingSection } from '../ToppingSection'
import {
	ActionContainer,
	AddNewProductCard,
	CurrencyWrapper,
	FormContainer,
	NumberInputsContainer,
} from './AddNewProductDialog.styles'

type AddNewProductCardDialogProps = { category: string }
export function AddNewProductCardDialog({ category }: AddNewProductCardDialogProps) {
	const [isOpen, setIsOpen] = useState(false)

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const fields = Object.fromEntries(formData.entries())
		console.log(fields)
		//parse
		//set category
		setIsOpen(false)
	}
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
						<ToppingSection />
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
