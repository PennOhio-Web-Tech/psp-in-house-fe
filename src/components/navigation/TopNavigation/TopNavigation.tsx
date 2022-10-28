import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'

import { useTenant } from '@src/hooks/useTenant'

import { Avatar, AvatarFallback, AvatarImage } from '@src/components/common/Avatar'
import { NavBarLogo } from '@src/components/navigation/NavBarLogo'
import { AppSwitcher } from '@src/components/navigation/AppSwitcher'
import { NavLink } from '@src/components/navigation/NavLink'
import { ProfileDropdown } from '../ProfileDropdown/ProfileDropdown'

import {
	AvatarContainer,
	HeaderContainer,
	LinksContainer,
	NavContainer,
} from './TopNavigation.styles'

type TopNavProps = {
	children: ReactNode
}

export function TopNavigation({ children }: TopNavProps) {
	const { tenant } = useTenant()
	const { data: session, status } = useSession()

	const isAuthenticated = status === 'authenticated'

	return (
		<HeaderContainer>
			<NavContainer>
				<AppSwitcher />
				{tenant && <NavBarLogo tenant={tenant} />}
				{session && isAuthenticated ? <LinksContainer>{children}</LinksContainer> : null}
			</NavContainer>
			{session && isAuthenticated ? (
				<ProfileDropdown>
					<AvatarContainer>
						<Avatar>
							<AvatarImage src="picture-url-goes-here" alt="John Doe" />
							<AvatarFallback>{session.user?.initials}</AvatarFallback>
						</Avatar>
						{session.user?.firstName} {session.user?.lastName}
					</AvatarContainer>
				</ProfileDropdown>
			) : (
				<NavLink
					link={{
						id: 'signin',
						href: 'auth/signin',
						text: 'Sign In',
						testId: 'app-navigation-signin',
						exactPath: true,
					}}
				/>
			)}
		</HeaderContainer>
	)
}
