import { AppDescription, AppTitle, AppTitlePrefix } from './AuthFormDescription.styles'

type AuthFormDescriptionProps = {
	appTitle: string
	appDescription: string
	welcomeMsg: string
}

export function AuthFormDescription({
	welcomeMsg,
	appTitle,
	appDescription,
}: AuthFormDescriptionProps) {
	return (
		<>
			<AppTitlePrefix>{welcomeMsg}</AppTitlePrefix>
			<AppTitle>{appTitle}</AppTitle>
			<AppDescription>{appDescription}</AppDescription>
		</>
	)
}
