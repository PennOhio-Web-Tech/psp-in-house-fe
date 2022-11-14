import { Menu } from '@src/components/common/Menu'
import { FakeMenu } from '@src/constants/FakeMenu'
import { MenuLayoutContainer } from './MenuLayout.styles'

export function MenuLayout() {
	return (
		<MenuLayoutContainer>
			<h2>Menu</h2>
			<Menu menu={FakeMenu} />
		</MenuLayoutContainer>
	)
}
