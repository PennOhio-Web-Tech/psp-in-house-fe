import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		fonts: {}
		colors: {
			pageUi: {}
			navigation: {}
			text: {}
			button: {}
			status: {}
		}
		shadows: {}
	}
}
export const theme: DefaultTheme = {
	colors: { pageUi: {}, navigation: {}, text: {}, button: {}, status: {} },
	fonts: {},
	shadows: {},
}
