import { Menu as MenuType } from '@src/@types/Menu'
import { Menu } from '@src/components/common/Menu'
import { Spinner } from '@src/components/icons'
import { getMenu } from '@src/services/api/menu'
import { ErrorMessage } from '@src/styles/components'
import { useQuery } from '@tanstack/react-query'
import { MenuLayoutContainer } from './MenuLayout.styles'

export function MenuLayout() {
	const {
		isError,
		isLoading,
		data: menu,
	} = useQuery(['menu'], async () => {
		const res = await getMenu()
		const data = await res.json()
		return data.menu[0].categories as MenuType
	})

	if (isLoading) {
		return <Spinner />
	}
	if (isError) {
		return <ErrorMessage>Could not find menu. Call tech support</ErrorMessage>
	}
	return (
		<MenuLayoutContainer>
			<h2>Menu</h2>
			<Menu menu={menu} />
		</MenuLayoutContainer>
	)
}
