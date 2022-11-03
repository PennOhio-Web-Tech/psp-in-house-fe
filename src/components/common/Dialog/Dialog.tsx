import styled, { keyframes } from 'styled-components'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'

import { CloseIcon } from '@src/components/icons'

const overlayShow = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const contentShow = keyframes`
    0% { opacity: 0; transform: translate(-50%, -48%) scale(0.96);}
    100% { opacity: 1; transform: translate(-50%, -50%) scale(1);}
`

const StyledOverlay = styled(DialogPrimitive.Overlay)`
	background: #00000031;
	position: fixed;
	inset: 0;

	@media (prefers-reduced-motion: no-preference) {
		animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
`
type StyledContentProps = { preferredWidth?: string; maxHeight?: string; scroll?: boolean }
const StyledContent = styled(DialogPrimitive.Content)<StyledContentProps>`
	background: ${({ theme }) => theme.colors.pageUi.pageBg};
	border-radius: 0.5rem;
	box-shadow: ${({ theme }) => theme.shadows.large};
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: fit-content;
	max-height: ${({ maxHeight = '85vh' }) => maxHeight};
	width: min(95vw, ${({ preferredWidth = '800px' }) => preferredWidth});
	@media (prefers-reduced-motion: no-preference) {
		animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
	padding: 1rem 0;
`

const StyledDescription = styled(DialogPrimitive.Description)`
	max-width: 600px;
	padding: 0 2rem;
`

const StyledTitle = styled(DialogPrimitive.Title)`
	padding: 2rem;
	padding-bottom: 1rem;
`

const StyledDialogClose = styled(DialogPrimitive.Close)`
	position: absolute;
	top: 1.25rem;
	right: 1.25rem;
`

type DialogContentProps = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode
	title?: string
	description?: string
	onClose?: () => void
	preferredWidth?: string
	maxHeight?: string
	noTitle?: boolean
	noDescription?: boolean
	scroll?: boolean
	noCloseIcon?: boolean
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
	(
		{
			children,
			title,
			noTitle = false,
			noDescription = false,
			description,
			onClose,
			noCloseIcon = false,
			...props
		},
		forwardedRef
	) => (
		<DialogPrimitive.Portal>
			<StyledOverlay onClick={onClose} />
			<StyledContent {...props} ref={forwardedRef}>
				{noTitle ? null : (
					<DialogTitle asChild>
						<h6>{title}</h6>
					</DialogTitle>
				)}
				{noDescription ? null : <DialogDescription>{description}</DialogDescription>}
				{children}
				{noCloseIcon ? null : (
					<StyledDialogClose aria-label="Close" asChild>
						<div onClick={onClose} style={{ cursor: 'pointer' }}>
							<CloseIcon />
						</div>
					</StyledDialogClose>
				)}
			</StyledContent>
		</DialogPrimitive.Portal>
	)
)

DialogContent.displayName = 'DialogContent'

export const DialogClose = StyledDialogClose
export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
