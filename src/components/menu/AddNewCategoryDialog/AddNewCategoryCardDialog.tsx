import { Dialog, DialogContent, DialogTrigger } from '@src/components/common/Dialog'
import { CircularAddIcon } from '@src/components/icons'
import { addCategory, AddCategoryType } from '@src/services/api/menu'
import { Button, Fieldset, Input, Label, Textarea } from '@src/styles/components'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { FormContainer } from '../AddNewProductModal/AddNewProductDialog.styles'
import { AddNewCategoryCard } from './AddNewCategoryModal.styles'

export function AddNewCategoryCardDialog() {
	const queryClient = useQueryClient()
	const [isOpen, setIsOpen] = useState(false)
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const fields = Object.fromEntries(formData.entries())
		const categoryData: AddCategoryType = {
			name: fields['name'] as string,
			description: fields['description'] as string,
		}
		addCategoryMutation.mutate(categoryData)
	}
	const addCategoryMutation = useMutation(
		async (categoryData: AddCategoryType) => await addCategory(categoryData),
		{
			onSuccess: () => {
				toast.success('Category has been added successfully!')
				setIsOpen(false)
				queryClient.invalidateQueries(['menu'])
			},
		}
	)

	return (
		<Dialog open={isOpen}>
			<DialogTrigger asChild>
				<AddNewCategoryCard onClick={() => setIsOpen(true)}>
					<CircularAddIcon />
					<h6>Add New Category</h6>
				</AddNewCategoryCard>
			</DialogTrigger>
			<DialogContent
				title="Add a new category"
				description="Please enter all of the information regarding the new category"
				onClose={() => {
					setIsOpen(false)
				}}
				preferredWidth="500px"
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
						<Button variant="white" type="submit">
							Add Category
						</Button>
					</FormContainer>
				</form>
			</DialogContent>
		</Dialog>
	)
}
