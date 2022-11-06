import { Layout } from '@src/components/common/Layout'
import { SideNav } from '@src/components/side-nav/SideNav'
import { InternalPageContainer, PageContainer } from '@src/styles/components'

export default function MenuPage() {
	return (
		<Layout>
			<SideNav />
			<PageContainer>
				<InternalPageContainer>
					<h1>Menu</h1>
				</InternalPageContainer>
			</PageContainer>
		</Layout>
	)
}