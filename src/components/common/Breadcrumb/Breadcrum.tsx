import { ChevronLeftIcon } from '@src/components/icons'
import Link from 'next/link'
import styled from 'styled-components'

type BreadcrumProps = { href: string; label: string }
export function Breadcrum({ href, label }: BreadcrumProps) {
	return (
		<Container>
			<Link href={href}>
				<a>
					<ChevronLeftIcon />
					{label}
				</a>
			</Link>
		</Container>
	)
}

export const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;

	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
`
