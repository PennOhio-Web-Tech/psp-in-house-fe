import { ReactNode } from 'react'

import { compose } from '@src/middleware/compose'
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

export const getServerSideProps = compose(withSessionMiddleware)

// SAMPLE PAGE
export default function RequestsPage({}: RequestsPageProps) {
	useRouteToSigninOnUnauth()

	return (
		<Layout>
			<TopNavigation>
				<NavMenuLinks links={navMenuLinks} />
			</TopNavigation>
			<PageContainer>
				<h1> - All Requests</h1>
			</PageContainer>
		</Layout>
	)
}
