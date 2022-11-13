import { Layout } from '@src/components/common/Layout'
import { NewOrderLayout } from '@src/components/new-order/NewOrderLayout/NewOrderLayout'
import { SideNav } from '@src/components/side-nav/SideNav'
import { InternalPageContainer, PageContainer } from '@src/styles/components'

export default function NewOrderPage() {
	return (
		<Layout>
			<SideNav />
			<PageContainer>
				<InternalPageContainer>
					<NewOrderLayout />
				</InternalPageContainer>
			</PageContainer>
		</Layout>
	)
}
