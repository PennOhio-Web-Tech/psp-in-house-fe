import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export async function withSessionMiddleware(
	ctx: GetServerSidePropsContext,
	pageProps: any,
	next: Function
) {
	const session = await getSession(ctx)

	if (!session) {
		return (pageProps.redirect = {
			destination: '/api/auth/signin',
			permanent: false,
		})
	}

	pageProps.props.session = { ...session }
	return next()
}
