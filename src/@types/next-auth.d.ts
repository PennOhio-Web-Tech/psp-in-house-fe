import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
	/*
	 * User argument passed by `session` and `jwt` callbacks
	 */
	interface User {
		id: string
		tenantId: string
		firstName: string
		lastName: string
		initials: string
		email: string
	}
	/*
	 * Returned by `useSession`, `getSession`, `session` callback and received
	 * as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user?: User
		tenantId?: string
	}
}

declare module 'next-auth/jwt' {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		tenantId?: string
		user?: User
	}
}
