import { navMenuLinks } from '@src/constants/navMenuLinks'
import { compose, getTenantMiddleware } from '@src/middleware'

import { Layout } from '@src/components/common/Layout'
import { NavMenuLinks } from '@src/components/navigation/NavMenuLinks'
import { TopNavigation } from '@src/components/navigation/TopNavigation'
import { SigninForm } from '@src/components/auth/SigninForm'
import { PageContainer } from '@src/styles/components'
import { AuthPageContainer } from '@src/styles/pages/auth.styles'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export const getServerSideProps = compose(
	getTenantMiddleware,
	async function routeToDashboardIfAuth(
		ctx: GetServerSidePropsContext,
		pageProps: any,
		next: Function
	) {
		const session = await getSession(ctx)
		if (session) {
			return (pageProps.redirect = {
				destination: '/dashboard',
				permanent: true,
			})
		}
	}
)

export default function SigninPage() {
	return (
		<Layout>
			<TopNavigation>
				<NavMenuLinks links={navMenuLinks} />
			</TopNavigation>
			<PageContainer>
				<AuthPageContainer>
					<SigninForm />
				</AuthPageContainer>
			</PageContainer>
		</Layout>
	)
}
