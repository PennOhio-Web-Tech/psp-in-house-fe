import { Product } from '@src/@types/Menu'
import { capitalizeFirstLetter, currencyFormatter } from '@src/utils'
import { MenuDisplayItemDiv } from './MenuDisplayItem.styles'

type MenuDisplayItemProps = {
	item: Product
}
export function MenuDisplayItem({ item }: MenuDisplayItemProps) {
	console.log(item)
	return (
		<MenuDisplayItemDiv>
			<div>
				<h4>{capitalizeFirstLetter(item.name)}</h4>
				<p>{currencyFormatter(item.price)}</p>
			</div>
		</MenuDisplayItemDiv>
	)
}
