import { Menu, Order, Pizza } from '@src/@types/Menu'
import { AddNewCategoryCardDialog } from '@src/components/menu/AddNewCategoryDialog'
import { AddNewProductCardDialog } from '@src/components/menu/AddNewProductModal'
import { MenuDisplayItem } from '@src/components/menu/MenuDisplayItem'
import { MenuProductOrderItem } from '@src/components/new-order/MenuProductOrderItem'
import { Flex } from '@src/styles/components'
import { nanoid } from 'nanoid'
import { Dispatch, SetStateAction, useState } from 'react'
import { MenuCategoryItem } from '../MenuCategoryItem'
import { DividerLine, MenuCategoriesDiv, MenuDiv, MenuProductsDiv } from './Menu.styles'

type MenuProps = {
	menu: Menu
	pizzas?: Pizza[]
	setPizzas?: Dispatch<SetStateAction<Pizza[]>>
	order?: Order
	setOrder?: Dispatch<SetStateAction<Order>>
}
export function Menu({ order, setOrder, menu, pizzas, setPizzas }: MenuProps) {
	const [category, setCategory] = useState('')

	const categoryToUse = menu?.find(item => {
		return item.name === category
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
					{setOrder && order ? null : <AddNewCategoryCardDialog />}
				</MenuCategoriesDiv>
				{categoryToUse ? (
					<>
						{setOrder && order && pizzas && setPizzas ? (
							<>
								<DividerLine />
								<MenuProductsDiv>
									{categoryToUse.products.map(item => {
										return (
											<MenuProductOrderItem
												item={item}
												setOrder={setOrder}
												order={order}
												key={nanoid(4)}
												pizzas={pizzas}
												setPizzas={setPizzas}
											/>
										)
									})}
								</MenuProductsDiv>
							</>
						) : (
							<>
								<DividerLine />
								<MenuProductsDiv>
									{categoryToUse.products.map(item => {
										return <MenuDisplayItem item={item} key={nanoid(4)} />
									})}
									<AddNewProductCardDialog category={category} />
								</MenuProductsDiv>
							</>
						)}
					</>
				) : null}
			</Flex>
		</MenuDiv>
	)
}
