import { IncomingMessage } from 'http'
import { getIsServer } from '@src/utils'

export function getSubdomain(req?: IncomingMessage | undefined): string | undefined {
	const isServer = getIsServer()
	let hasSubdomain, subdomain

	if (isServer && req) {
		hasSubdomain = !!req.headers.host?.includes('.')
		subdomain = req.headers.host?.split('.')[0]
	}

	if (!isServer) {
		hasSubdomain = !!window.location.host?.includes('.')
		subdomain = window.location.host.split('.')[0]
	}

	if (!hasSubdomain) return
	return subdomain
}
