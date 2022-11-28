import { Clock } from '../Clock'
import { SideNavLinks } from '../SideNavLinks'
import { AvatarAndSignOut, LogoContainer, SideNavContainer } from './SideNav.styles'

export function SideNav() {
	return (
		<SideNavContainer>
			<LogoContainer>
				<h2>Cravings Pizza POS</h2>
			</LogoContainer>
			<Clock />
			<SideNavLinks />
			<AvatarAndSignOut />
		</SideNavContainer>
	)
}
