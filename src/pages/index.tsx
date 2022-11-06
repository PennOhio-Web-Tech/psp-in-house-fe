import { GetServerSidePropsContext } from 'next'
import { compose } from '../middleware'

export const getServerSideProps = compose(async function redirectToDashboard(
	ctx: GetServerSidePropsContext,
	pageProps: any,
	next: Function
) {
	return (pageProps.redirect = {
		destination: '/orders',
		permanent: true,
	})
})

export default function HomePage() {
	return null
}
