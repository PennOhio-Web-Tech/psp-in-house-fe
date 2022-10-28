import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { ChangeEvent, FormEvent, useState } from 'react'

import {
	ActionsContainer,
	FormContainer,
	FormDescriptionSection,
	FormLayoutContainer,
	FormTitle,
	FormTitlePrefix,
	Separator,
} from '@src/styles/pages/auth.styles'
import { ErrorMessage, Fieldset, Input, Label, Button } from '@src/styles/components'
import { AuthFormDescription } from '@src/components/auth/AuthFormDescription'
import Link from 'next/link'

export function SigninForm() {
	const [formData, setFormData] = useState({ email: '', password: '' })

	const {
		query: { error: signinError },
	} = useRouter()

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		signIn('credentials-provider', {
			callbackUrl: `${window.location.origin}/dashboard`,
			...formData,
		})
	}

	function onInputChange(e: ChangeEvent<HTMLInputElement>) {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<FormLayoutContainer>
			<FormDescriptionSection>
				<AuthFormDescription
					welcomeMsg="Welcome to the"
					appTitle="Application Name"
					appDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
				tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
				eos et accusam est Lorem ipsum dolor sit amet."
				/>
			</FormDescriptionSection>
			<FormContainer>
				<FormTitlePrefix>Application Name</FormTitlePrefix>
				<FormTitle>Sign In</FormTitle>
				<Separator />
				{signinError ? <ErrorMessage>Invalid credentials.</ErrorMessage> : null}
				<form onSubmit={onSubmit}>
					<Fieldset>
						<Label htmlFor="email">Email*</Label>
						<Input
							name="email"
							id="email"
							type="email"
							onChange={onInputChange}
							value={formData.email}
						/>
					</Fieldset>
					<Fieldset>
						<Label htmlFor="password">Password*</Label>
						<Input
							name="password"
							id="password"
							type="password"
							onChange={onInputChange}
							value={formData.password}
						/>
					</Fieldset>
					<ActionsContainer>
						<Link href="/auth/register">
							<a>Not a member? Register here</a>
						</Link>
						<Button type="submit">Sign in</Button>
					</ActionsContainer>
				</form>
			</FormContainer>
		</FormLayoutContainer>
	)
}
