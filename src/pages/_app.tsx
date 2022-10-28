import Head from 'next/head'
import { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SessionProvider } from 'next-auth/react'

import { GlobalStyles } from '@src/styles'
import { AppThemeProvider } from '@src/contexts'
import { FIVE_MINS_IN_SEC } from '@src/constants/times'

const showReactQueryDevTools = true

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
				<title>Next.js Starter Kit</title>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<SessionProvider
						session={session}
						refetchInterval={FIVE_MINS_IN_SEC}
						refetchOnWindowFocus={true}
					>
						<AppThemeProvider>
							<Component {...pageProps} />
							<GlobalStyles />
							{showReactQueryDevTools && <ReactQueryDevtools />}
						</AppThemeProvider>
					</SessionProvider>
				</Hydrate>
			</QueryClientProvider>
		</>
	)
}
