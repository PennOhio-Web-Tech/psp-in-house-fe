import { Layout } from '@src/components/common/Layout'
import { MenuLayout } from '@src/components/menu/MenuLayout'
import { SideNav } from '@src/components/side-nav/SideNav'
import { InternalPageContainer, PageContainer } from '@src/styles/components'

export default function MenuPage() {
	return (
		<Layout>
			<SideNav />
			<PageContainer>
				<InternalPageContainer>
					<MenuLayout />
				</InternalPageContainer>
			</PageContainer>
		</Layout>
	)
}
