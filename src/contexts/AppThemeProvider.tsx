import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@src/styles'
type AppThemeProviderProps = {
	children: ReactNode
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
	//@ts-ignore
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
