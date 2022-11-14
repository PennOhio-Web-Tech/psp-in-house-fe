import { Product } from '@src/@types/Menu'
import { currencyFormatter } from '@src/utils'
import { MenuDisplayItemDiv } from './MenuDisplayItem.styles'

type MenuDisplayItemProps = {
	item: Product
}
export function MenuDisplayItem({ item }: MenuDisplayItemProps) {
	return (
		<MenuDisplayItemDiv>
			<div>
				<h4>{item.name}</h4>
				<p>{currencyFormatter(item.price)}</p>
			</div>
		</MenuDisplayItemDiv>
	)
}
