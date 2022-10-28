import { ReactNode } from 'react'

import { useTenant } from '@src/hooks/useTenant'
import { compose } from '@src/middleware/compose'
import { getTenantMiddleware } from '@src/middleware/getTenantMiddleware'
import { useRouteToSigninOnUnauth } from '@src/hooks/useRouteToSigninOnUnauth'

import { navMenuLinks } from '@src/constants/navMenuLinks'

import { Layout } from '@src/components/common/Layout'
import { TopNavigation } from '@src/components/navigation/TopNavigation'
import { NavMenuLinks } from '@src/components/navigation/NavMenuLinks'
import { PageContainer } from '@src/styles/components'
import { withSessionMiddleware } from '@src/middleware'

type RequestsPageProps = {
	children: ReactNode
}

export const getServerSideProps = compose(getTenantMiddleware, withSessionMiddleware)

// SAMPLE PAGE
export default function RequestsPage({}: RequestsPageProps) {
	const { tenant } = useTenant()
	useRouteToSigninOnUnauth()

	return (
		<Layout>
			<TopNavigation>
				<NavMenuLinks links={navMenuLinks} />
			</TopNavigation>
			<PageContainer>
				<h1>{tenant?.name} - All Requests</h1>
			</PageContainer>
		</Layout>
	)
}
