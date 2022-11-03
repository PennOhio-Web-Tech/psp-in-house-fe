import { ClassificationLabel } from '@src/styles/components/ClassificationLabel'
import Link from 'next/link'
import { DotDividers, FooterContainer, FooterLink, FooterLinks } from './Footer.styles'

export function Footer() {
	return (
		<FooterContainer>
			<ClassificationLabel>unclassified data only</ClassificationLabel>
			<FooterLinks>
				<Link href="/terms" passHref>
					<FooterLink>Terms</FooterLink>
				</Link>
				<DotDividers />
				<Link href="/privacy" passHref>
					<FooterLink>Privacy</FooterLink>
				</Link>
				<DotDividers />
				<FooterLink>Contact</FooterLink>
			</FooterLinks>
		</FooterContainer>
	)
}
