import { Menu, Order } from '@src/@types/Menu'
import { Flex } from '@src/styles/components'
import { nanoid } from 'nanoid'
import { Dispatch, SetStateAction, useState } from 'react'
import { MenuCategoryItem } from '../MenuCategoryItem'
import { MenuProductItem } from '../MenuProductItem'
import { DividerLine, MenuCategoriesDiv, MenuDiv, MenuProductsDiv } from './Menu.styles'

type MenuProps = { order: Order; setOrder: Dispatch<SetStateAction<Order>>; menu: Menu }
export function Menu({ order, setOrder, menu }: MenuProps) {
	const [category, setCategory] = useState('')

	const categoryToUse = menu.find(item => {
		return item.category === category
	})
	return (
		<MenuDiv>
			<Flex direction="column" gap="1.5rem">
				<MenuCategoriesDiv>
					{menu.map(item => {
						return (
							<MenuCategoryItem
								item={item}
								setCategory={setCategory}
								category={category}
								key={nanoid(4)}
							/>
						)
					})}
				</MenuCategoriesDiv>
				{categoryToUse ? (
					<>
						<DividerLine />
						<MenuProductsDiv>
							{categoryToUse.products.map(item => {
								return (
									<MenuProductItem
										item={item}
										setOrder={setOrder}
										order={order}
										key={nanoid(4)}
									/>
								)
							})}
						</MenuProductsDiv>
					</>
				) : null}
			</Flex>
		</MenuDiv>
	)
}
