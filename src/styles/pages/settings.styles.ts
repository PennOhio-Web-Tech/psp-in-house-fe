import { Avatar, AvatarFallback } from '@src/components/common/Avatar'
import styled from 'styled-components'
import { Button, Fieldset } from '../components'

export const DividerLine = styled.div`
	background-color: ${({ theme }) => theme.colors.pageUi.sectionDivider};
	height: 1px;
	width: 100%;
	margin-bottom: 1rem;
`

export const ActionsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`

export const ScrollableContent = styled.div`
	max-height: min(50vh, 700px);
	overflow-y: auto;
	margin: 2rem 0;
	padding: 0 2rem;
`

export const SettingsDialogButton = styled(Button)`
	width: 100%;
`

export const AvatarAndSubmitContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`

export const AvatarDiv = styled.div`
	display: flex;
	align-items: center;
`

export const UpdateUserContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
`

export const SettingsAvatar = styled(Avatar)`
	height: 46px;
	width: 46px;
	margin-right: 1rem;
`

export const AvatarTextDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const UserInfoInputsDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0 1.25rem;
`

export const SettingsAvatarFallback = styled(AvatarFallback)`
	background-color: black;
	color: ${({ theme }) => theme.colors.neutral[10]};
	font-size: 1.25rem;
`

export const SettingOption = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	svg {
		width: 24px;
		height: 24px;
	}
	div {
		padding-right: 1rem;
	}
`

export const EditBasicInfoButton = styled(Button)`
	svg {
		margin-left: 0;
		margin-right: 0.5rem;
	}
`

export const OrganizationFieldset = styled(Fieldset)`
	margin-bottom: 0rem;
`

export const BlueText = styled.strong`
	color: ${({ theme }) => theme.colors.button.fill};
`

export const RedText = styled.strong`
	color: #d41c1c;
`

export const BasicInfoDialogContent = styled.div`
	padding: 1rem 2rem;
`
