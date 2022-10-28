import { navMenuLinks } from '@src/constants/navMenuLinks'
import { compose, getTenantMiddleware } from '@src/middleware'

import { Layout } from '@src/components/common/Layout'
import { NavMenuLinks } from '@src/components/navigation/NavMenuLinks'
import { TopNavigation } from '@src/components/navigation/TopNavigation'
import { PageContainer } from '@src/styles/components'
import { AuthPageContainer } from '@src/styles/pages/auth.styles'
import { RegisterForm } from '@src/components/auth/RegisterForm'

export const getServerSideProps = compose(getTenantMiddleware)

export default function RegisterPage() {
	return (
		<Layout>
			<TopNavigation>
				<NavMenuLinks links={navMenuLinks} />
			</TopNavigation>
			<PageContainer>
				<AuthPageContainer>
					<RegisterForm />
				</AuthPageContainer>
			</PageContainer>
		</Layout>
	)
}
