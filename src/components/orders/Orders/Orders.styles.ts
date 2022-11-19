import { Flex } from '@src/styles/components'
import styled from 'styled-components'

export const OrdersContainer = styled(Flex)`
	padding-top: 3rem;
`

export const OrderItem = styled.div``

export const OrdersDiv = styled.div`
	overflow-x: auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, 248px);
	gap: 1rem;
	width: 80vw;
`
