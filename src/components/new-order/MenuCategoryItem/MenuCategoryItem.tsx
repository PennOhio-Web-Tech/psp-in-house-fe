import { Product } from '@src/@types/Menu'
import { capitalizeFirstLetter } from '@src/utils'
import { Dispatch, SetStateAction } from 'react'
import { MenuCategoryItemDiv } from './MenuCategoryItem.styles'
type MenuCategoryItemProps = {
	item: {
		category: string
		id: string
		products: Product[]
	}
	setCategory: Dispatch<SetStateAction<string>>
	category: string
}

export function MenuCategoryItem({ item, setCategory, category }: MenuCategoryItemProps) {
	const isSelected = category === item.category
	return (
		<MenuCategoryItemDiv
			onClick={() => {
				if (isSelected) {
					setCategory('')
				} else {
					setCategory(item.category)
				}
			}}
			isSelected={isSelected}
		>
			<h4>{capitalizeFirstLetter(item.category)}</h4>
			<p>{item.products.length} items</p>
		</MenuCategoryItemDiv>
	)
}
