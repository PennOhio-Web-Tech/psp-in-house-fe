import * as AvatarPrimitive from '@radix-ui/react-avatar'
import styled from 'styled-components'

/*
	See radix-ui documentation for functionality
	https://www.radix-ui.com/docs/primitives/components/avatar
*/

const StyledAvatar = styled(AvatarPrimitive.Root)`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	vertical-align: middle;
	overflow: hidden;
	user-select: none;
	width: 38px;
	height: 38px;
	border-radius: 100%;
	background: ${({ theme }) => theme.colors.neutral[40]};
	font-family: ${({ theme }) => theme.fonts.body};
`

const StyledImage = styled(AvatarPrimitive.Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
`

const StyledFallback = styled(AvatarPrimitive.Fallback)`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.neutral[10]};
	color: ${({ theme }) => theme.colors.text.primary};
	font-size: 1rem;
	line-height: 1;
	font-weight: 500;
	font-family: ${({ theme }) => theme.fonts.body};
`

// Exports
export const Avatar = StyledAvatar
export const AvatarImage = StyledImage
export const AvatarFallback = StyledFallback
