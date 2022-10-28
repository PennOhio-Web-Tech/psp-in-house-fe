import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function useRouteToSigninOnUnauth() {
	const { status } = useSession()
	const {
		push,
		query: { error: authError },
	} = useRouter()

	useEffect(
		function routeToSigninOnUnauth() {
			if (status === 'unauthenticated') push('/auth/signin')
		},
		[status, authError]
	)

	return null
}
