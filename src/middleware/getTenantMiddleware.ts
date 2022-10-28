import { GetServerSidePropsContext } from 'next'
import { dehydrate, QueryClient } from 'react-query'

import { ONE_HOUR_IN_MS } from '@src/constants/times'
import tenants from '@src/constants/tenants'

export async function getTenantMiddleware(
	ctx: GetServerSidePropsContext,
	pageProps: any,
	next: Function
) {
	const hasSubdomain = ctx.req.headers.host?.includes('.')
	const subdomain = ctx.req.headers.host?.split('.')[0]

	// FOR DEMOSTRATION PURPOSES
	// tenant should be fetched from BE service ie. fetchTenant
	const tenant = tenants.find(tenant => tenant.subdomain === subdomain)
	if (!hasSubdomain || !tenant) {
		return (pageProps.notFound = true)
	}

	const queryClient = new QueryClient()
	await queryClient.prefetchQuery('tenant', async () => new Promise(resolve => resolve(tenant)), {
		staleTime: ONE_HOUR_IN_MS,
	})

	pageProps.props.dehydratedState = dehydrate(queryClient)
	return next()
}
