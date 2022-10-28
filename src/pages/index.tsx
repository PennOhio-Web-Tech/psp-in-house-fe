import { GetServerSidePropsContext } from 'next'
import { compose, withSessionMiddleware } from '@src/middleware'

export const getServerSideProps = compose(
	withSessionMiddleware,
	async function redirectToDashboard(
		ctx: GetServerSidePropsContext,
		pageProps: any,
		next: Function
	) {
		return (pageProps.redirect = {
			destination: '/dashboard',
			permanent: true,
		})
	}
)

export default function HomePage() {
	return null
}
