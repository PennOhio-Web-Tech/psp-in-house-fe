import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {}
}

export const theme: DefaultTheme = {}
