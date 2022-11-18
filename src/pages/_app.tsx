import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyles } from '../styles'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Head from 'next/head'
import { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const showReactQueryDevTools = true

export default function App({ Component, pageProps }: AppProps) {
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
					<ThemeProvider theme={theme}>
						<Component {...pageProps} />
						<GlobalStyles />
						<ToastContainer
							position="bottom-center"
							autoClose={2500}
							hideProgressBar={false}
							newestOnTop
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable={false}
							pauseOnHover
						/>
						{showReactQueryDevTools && <ReactQueryDevtools />}
					</ThemeProvider>
				</Hydrate>
			</QueryClientProvider>
		</>
	)
}
