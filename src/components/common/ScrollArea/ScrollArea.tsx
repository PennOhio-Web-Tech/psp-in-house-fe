import styled from 'styled-components'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

const StyledScrollArea = styled(ScrollAreaPrimitive.Root)`
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.neutral[10]};
	border-radius: 0 0 10px 10px;
	width: 100%;
	padding: 2rem;
	padding-top: 0;
	height: 24.5rem;
`

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
	display: flex;
	// ensures no selection
	user-select: none;
	// disable browser handling of all panning and zooming gestures on touch devices
	touch-action: none;
	border-radius: 20px;
	padding: 2px;
	margin: 0 2px 1.75rem 2px;
	background: ${({ theme }) => theme.colors.neutral[40]};
	transition: background 160ms ease-out;
	&[data-orientation='vertical'] {
		width: 0.75rem;
	}
	&[data-orientation='horizontal'] {
		flex-direction: column;
		height: 0.75rem;
	}
`

const StyledScrollAreaThumb = styled(ScrollAreaPrimitive.ScrollAreaThumb)`
	flex: 1;
	background: ${({ theme }) => theme.colors.neutral[60]};
	border-radius: 10px;
	position: relative;
	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
	}
`

const StyledScrollAreaViewPort = styled(ScrollAreaPrimitive.ScrollAreaViewport)`
	width: 100%;
	height: 100%;
`

export const ScrollArea = StyledScrollArea
export const ScrollAreaScrollbar = StyledScrollbar
export const ScrollAreaThumb = StyledScrollAreaThumb
export const ScrollAreaViewport = StyledScrollAreaViewPort
