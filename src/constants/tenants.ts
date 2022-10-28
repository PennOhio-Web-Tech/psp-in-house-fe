import { DefaultTheme } from 'styled-components'
/*
FOR DEMOSTRATION PURPOSES ONLY, Tenant type and data 
SHOULD be coming from db
*/

// Required to extend typesafe theme to styled-components
declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			navigation: string
			accentText: string
		}
	}
}

export type TenantWithTheme = Tenant & {
	theme: DefaultTheme
}

export type Tenant = {
	id: string
	name: string
	subdomain: string
	logo_path: string
}

const tenants: TenantWithTheme[] = [
	{
		id: '1',
		name: 'Tenant A',
		subdomain: 'tenant-a',
		theme: {
			color: {
				navigation: '#252525',
				accentText: '#f5ba00',
			},
		},
		logo_path: '',
	},
	{
		id: '2',
		name: 'Tenant B',
		subdomain: 'tenant-b',
		theme: {
			color: {
				navigation: 'blue',
				accentText: '',
			},
		},
		logo_path: '/images/tenant-b/landingLogo.png',
	},
]

export default tenants
