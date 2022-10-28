import { NavLink } from '@src/components/navigation/NavLink'
import { NavigationLink } from '@src/@types'

type NavMenuLinksProps = {
	links: NavigationLink[]
}

export function NavMenuLinks({ links }: NavMenuLinksProps) {
	return (
		<>
			{links.map(link => (
				<NavLink key={link.id} link={link} />
			))}
		</>
	)
}
