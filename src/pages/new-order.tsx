import { Layout } from '@src/components/common/Layout'
import { SideNav } from '@src/components/side-nav/SideNav'
import { InternalPageContainer, PageContainer } from '@src/styles/components'

export default function NewOrderPage() {
	return (
		<Layout>
			<SideNav />
			<PageContainer>
				<InternalPageContainer>
					<h1>New Order</h1>
				</InternalPageContainer>
			</PageContainer>
		</Layout>
	)
}
