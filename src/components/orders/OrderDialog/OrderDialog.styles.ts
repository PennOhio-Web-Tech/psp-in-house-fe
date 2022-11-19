import { Flex } from '@src/styles/components'
import styled from 'styled-components'

export const OrderTriggerDiv = styled(Flex)`
	background-color: #ffffff;
	border-radius: 8px;
	padding: 1rem;
	height: 10rem;
	cursor: pointer;
`

export const ContentContainer = styled.div`
	padding: 2rem;
	display: flex;
	gap: 4rem;
	flex-direction: column;
`

export const ProductsFlex = styled(Flex)``

export const ProductContainer = styled(Flex)`
	border: 1px solid grey;
	border-radius: 4px;
	width: 100%;
	padding: 1rem;
`

export const FullLengthFlex = styled(Flex)`
	width: 100%;
	height: 100%;
`

export const CollapseDiv = styled.div`
	cursor: pointer;
	user-select: none;
`
