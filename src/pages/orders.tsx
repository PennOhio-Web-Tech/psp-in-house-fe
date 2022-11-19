import { Layout } from '@src/components/common/Layout'
import { OrdersLayout } from '@src/components/orders/OrdersLayout'
import { SideNav } from '@src/components/side-nav/SideNav'
import { InternalPageContainer, PageContainer } from '@src/styles/components'

export default function OrderPage() {
	return (
		<Layout>
			<SideNav />
			<PageContainer>
				<InternalPageContainer>
					<OrdersLayout />
				</InternalPageContainer>
			</PageContainer>
		</Layout>
	)
}
