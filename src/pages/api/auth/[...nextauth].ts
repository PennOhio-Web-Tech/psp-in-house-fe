import CredentialsProvider from 'next-auth/providers/credentials'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'

import { ONE_DAY_IN_SEC } from '@src/constants/times'

const nextAuthOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			id: 'credentials-provider',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				// Should fetch user from db using credentials
				const user = {
					firstName: 'Sebastian',
					lastName: 'Garces',
					initials: 'SG',
					id: '1',
					tenantId: '1',
					email: 'test.user@mail.com',
				}

				// If fetch call is not successful
				if (
					credentials?.email === 'test.user@mail.com' &&
					credentials?.password === 'password'
				) {
					// Should return user object from db call
					return user
				}

				return null
			},
		}),
	],
	jwt: {
		maxAge: ONE_DAY_IN_SEC,
	},
	session: {
		maxAge: ONE_DAY_IN_SEC,
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.user = user
				token.tenantId = user.tenantId
			}

			return token
		},
		async session({ session, token }) {
			if (token) {
				session.user = token.user
				session.tenantId = token.tenantId
			}

			return session
		},
	},
	pages: {
		signIn: '/auth/signin',
	},
}

export default async function NextAuthHandler(req: NextApiRequest, res: NextApiResponse) {
	setNextAuthUrl(req)
	return await NextAuth(req, res, nextAuthOptions)
}

function setNextAuthUrl(req: NextApiRequest) {
	const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
	const host = req.headers['host']

	/**
	 * IMPORTANT !!!! NEEDS TO CHECK HOST AGAINST WHITELIST
	 * This is a security concern if not implemented!
	 * Implement as soon as tenant service is completed
	 */

	if (!host) {
		throw new Error(
			`The request has no host header which breaks authentication and authorization.`
		)
	}

	process.env.NEXTAUTH_URL = `${protocol}://${host}`
	console.log(`set envar NEXTAUTH_URL=${process.env.NEXTAUTH_URL}`)
}
