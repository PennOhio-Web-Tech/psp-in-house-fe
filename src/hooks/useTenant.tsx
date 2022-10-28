import { useMemo } from 'react'
import { useQuery } from 'react-query'
import tenants, { TenantWithTheme } from '@src/constants/tenants'
import { getSubdomain } from '@src/utils'
import { ONE_HOUR_IN_MS } from '@src/constants/times'

export function useTenant() {
	const subdomain = useMemo(() => getSubdomain(), [])

	const {
		data: tenant,
		error,
		status,
		dataUpdatedAt,
	} = useQuery('tenant', async () => await mockFetchTenant(subdomain), {
		staleTime: ONE_HOUR_IN_MS,
	})

	return { tenant, subdomain, error, status, dataUpdatedAt }
}

function mockFetchTenant(subdomain: string | undefined): Promise<TenantWithTheme | undefined> {
	const tenant = tenants.find(tenant => tenant.subdomain === subdomain)
	return new Promise(resolve => resolve(tenant))
}
