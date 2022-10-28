import { useTenant } from '@src/hooks/useTenant'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

type AppThemeProviderProps = {
	children: ReactNode
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
	const { tenant } = useTenant()

	return tenant ? <ThemeProvider theme={tenant.theme}>{children}</ThemeProvider> : <>{children}</>
}
