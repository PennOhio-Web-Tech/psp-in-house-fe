import { NavigationLink } from '@src/@types'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Anchor } from './NavLink.styles'

type NavLinkProps = {
	link: NavigationLink
}

export function NavLink({ link }: NavLinkProps) {
	const { pathname } = useRouter()
	const isActive = link.exactPath
		? pathname.slice(1) === link.href
		: pathname.split('/').includes(link.href.split('/')[0])

	return (
		<Link href={`/${link.href}`}>
			<Anchor isActive={isActive} data-testid={link.testId}>
				{link.text}
			</Anchor>
		</Link>
	)
}
