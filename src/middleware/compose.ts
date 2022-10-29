import { GetServerSidePropsContext } from 'next'

export function compose(...middlewares: Function[]) {
	// Return getServerSideProps handler
	return async function composer(ctx: GetServerSidePropsContext) {
		let prevIndex = -1
		const pageProps = { props: {} }

		const runner = async (index: number) => {
			// Check if `next` was called accidently muliple times
			if (index === prevIndex) {
				throw new Error('next() was called multiple times')
			}

			const middleware = middlewares[index]
			prevIndex = index

			if (typeof middleware === 'function') {
				// middleware must adhere to this signature
				await middleware(ctx, pageProps, () => {
					return runner(index + 1)
				})
			}
		}

		await runner(0)
		return pageProps
	}
}
