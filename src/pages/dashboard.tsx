import { ReactNode } from 'react'

import { compose } from '@src/middleware/compose'
import { useRouteToSigninOnUnauth } from '@src/hooks/useRouteToSigninOnUnauth'

import { navMenuLinks } from '@src/constants/navMenuLinks'

import { Layout } from '@src/components/common/Layout'
import { TopNavigation } from '@src/components/navigation/TopNavigation'
import { NavMenuLinks } from '@src/components/navigation/NavMenuLinks'
import { PageContainer } from '@src/styles/components'
import { withSessionMiddleware } from '@src/middleware'

type DashboardPageProps = {
	children: ReactNode
}

export const getServerSideProps = compose(withSessionMiddleware)

// SAMPLE PAGE
export default function DashboardPage({}: DashboardPageProps) {
	useRouteToSigninOnUnauth()

	return (
		<Layout>
			<TopNavigation>
				<NavMenuLinks links={navMenuLinks} />
			</TopNavigation>
			<PageContainer>
				<h1> - Dashboard</h1>
			</PageContainer>
		</Layout>
	)
}
