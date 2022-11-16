import { Product } from '@src/@types/Menu'
import { capitalizeFirstLetter } from '@src/utils'
import { Dispatch, SetStateAction } from 'react'
import { MenuCategoryItemDiv } from './MenuCategoryItem.styles'
type MenuCategoryItemProps = {
	item: {
		id: string
		name: string
		description: string
		createdAt: string
		updatedAt: string
		menuId: string
		products: Product[]
	}
	setCategory: Dispatch<SetStateAction<string>>
	category: string
}

export function MenuCategoryItem({ item, setCategory, category }: MenuCategoryItemProps) {
	const isSelected = category === item.name
	return (
		<MenuCategoryItemDiv
			onClick={() => {
				if (isSelected) {
					setCategory('')
				} else {
					setCategory(item.name)
				}
			}}
			isSelected={isSelected}
		>
			<h4>{capitalizeFirstLetter(item.name)}</h4>
			<p>{item.products.length} items</p>
		</MenuCategoryItemDiv>
	)
}
