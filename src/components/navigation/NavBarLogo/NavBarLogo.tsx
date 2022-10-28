import Link from 'next/link'

import { TenantWithTheme } from '@src/constants/tenants'
import { Anchor, LogoImage, StyledTenantName } from './NavBarLogo.styles'

export function NavBarLogo({ tenant }: { tenant: TenantWithTheme }) {
	return (
		<Link href="/">
			<Anchor>
				{tenant.logo_path ? (
					<LogoImage src={tenant.logo_path} alt={tenant.name + ' logo'} />
				) : null}
				<StyledTenantName>{tenant.name}</StyledTenantName>
			</Anchor>
		</Link>
	)
}
