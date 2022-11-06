import { sideNavLinks } from '@src/constants/sideNavLinks'
import { useRouter } from 'next/router'
import { LinksContainer, NavLink } from './SideNavLinks.styles'

export function SideNavLinks() {
	const { pathname } = useRouter()

	return (
		<LinksContainer direction="column" justifyContent="flex-start">
			{sideNavLinks.map((link, index) => {
				const isActive = pathname.split('/').includes(link.href.split('/')[0])
				console.log({ link: link.href, isActive })
				return (
					<NavLink href={link.href} isActive={isActive} key={index} isPlus={link.isPlus}>
						{link.icon}
						<h6>{link.text}</h6>
					</NavLink>
				)
			})}
		</LinksContainer>
	)
}
