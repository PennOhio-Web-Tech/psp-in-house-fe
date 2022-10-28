import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import {
	ActionsContainer,
	FormContainer,
	FormDescriptionSection,
	FormLayoutContainer,
	FormTitle,
	FormTitlePrefix,
	Separator,
} from '@src/styles/pages/auth.styles'
import { Button, ErrorMessage, Fieldset, Flex, Input, Label } from '@src/styles/components'
import { AuthFormDescription } from '@src/components/auth/AuthFormDescription'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@src/components/common/Tabs'
import { CheckIcon } from '@src/components/icons'
import { emailRegex } from '@src/constants/regex'
import Link from 'next/link'

type TabNamesEnum = 'create_account' | 'basic_information'

export function RegisterForm() {
	const [createAccountFormData, setCreateAccountFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	})

	const [basicInfoFormData, setBasicInfoFormData] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
	})

	const [tabValue, setTabValue] = useState<TabNamesEnum>('create_account')
	const [isCreateAccountComplete, setIsCreateAccountComplete] = useState(false)

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		// validate basicInfoFormData here

		// register user here if valid

		// if success signin
		signIn('credentials-provider', {
			callbackUrl: `${window.location.origin}/dashboard`,
			email: createAccountFormData.email,
			password: createAccountFormData.password,
		})
		// else provide user feedback
	}

	function onCreateAccountInputChange(e: ChangeEvent<HTMLInputElement>) {
		setCreateAccountFormData({ ...createAccountFormData, [e.target.name]: e.target.value })
	}

	function onBasicInfoInputChange(e: ChangeEvent<HTMLInputElement>) {
		setBasicInfoFormData({ ...basicInfoFormData, [e.target.name]: e.target.value })
	}

	function validateCreateAccountForm() {
		const { password, confirmPassword, email } = createAccountFormData
		const isEmail = emailRegex.test(email)
		const hasMatchingPasswords = password === confirmPassword

		if (isEmail && hasMatchingPasswords) return true
		return false
	}

	function onNextClick() {
		const isCreateAccountValid = validateCreateAccountForm()
		console.log({ basicInfoFormData, createAccountFormData })

		if (isCreateAccountValid) {
			setIsCreateAccountComplete(true)
			setTabValue('basic_information')
		} else {
			setIsCreateAccountComplete(false)
			setTabValue('create_account')
		}
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
				<FormTitle>Register</FormTitle>
				<Tabs value={tabValue} activationMode="manual">
					<TabsList>
						<TabsTrigger
							value="create_account"
							data-state={tabValue === 'create_account' ? 'active' : 'inactive'}
							data-account-form-state={
								isCreateAccountComplete ? 'complete' : 'incomplete'
							}
							onClick={() => setTabValue('create_account')}
						>
							<span>{isCreateAccountComplete ? <CheckIcon /> : '1'}</span> Create
							Account
						</TabsTrigger>
						<TabsTrigger
							value="basic_information"
							data-state={tabValue === 'basic_information' ? 'active' : 'inactive'}
							onClick={() => setTabValue('basic_information')}
							disabled={!isCreateAccountComplete}
						>
							<span>2</span> Basic Information
						</TabsTrigger>
					</TabsList>
					<Separator />
					<TabsContent value="create_account">
						<form>
							<Flex>
								<Fieldset>
									<Label htmlFor="email">Email*</Label>
									<Input
										name="email"
										id="email"
										type="email"
										onChange={onCreateAccountInputChange}
										value={createAccountFormData.email}
									/>
								</Fieldset>
							</Flex>
							<Flex gap="1rem">
								<Fieldset>
									<Label htmlFor="password">Password*</Label>
									<Input
										name="password"
										id="password"
										type="password"
										onChange={onCreateAccountInputChange}
										value={createAccountFormData.password}
									/>
								</Fieldset>
								<Fieldset>
									<Label htmlFor="confirmPassword">Confirm password*</Label>
									<Input
										name="confirmPassword"
										id="confirmPassword"
										type="password"
										onChange={onCreateAccountInputChange}
										value={createAccountFormData.confirmPassword}
									/>
								</Fieldset>
							</Flex>
							<ActionsContainer>
								<Link href="/auth/signin">
									<a>Already have an account? Sign in here.</a>
								</Link>
								<Button type="button" onClick={onNextClick}>
									Next
								</Button>
							</ActionsContainer>
						</form>
					</TabsContent>
					<TabsContent value="basic_information">
						<form onSubmit={onSubmit}>
							<Flex gap="1rem">
								<Fieldset>
									<Label htmlFor="firstName">First Name*</Label>
									<Input
										name="firstName"
										id="firstName"
										type="text"
										onChange={onBasicInfoInputChange}
										value={basicInfoFormData.firstName}
									/>
								</Fieldset>
								<Fieldset>
									<Label htmlFor="lastName">Last Name*</Label>
									<Input
										name="lastName"
										id="lastName"
										type="text"
										onChange={onBasicInfoInputChange}
										value={basicInfoFormData.lastName}
									/>
								</Fieldset>
							</Flex>
							<Flex>
								<Fieldset>
									<Label htmlFor="phoneNumber">
										Phone Number <span>(Optional)</span>
									</Label>
									<Input
										name="phoneNumber"
										id="phoneNumber"
										type="text"
										onChange={onBasicInfoInputChange}
										value={basicInfoFormData.phoneNumber}
									/>
								</Fieldset>
							</Flex>
							<ActionsContainer>
								<Link href="/auth/signin">
									<a>Already have an account? Sign in here.</a>
								</Link>
								<Button type="submit">Register</Button>
							</ActionsContainer>
						</form>
					</TabsContent>
				</Tabs>
			</FormContainer>
		</FormLayoutContainer>
	)
}
