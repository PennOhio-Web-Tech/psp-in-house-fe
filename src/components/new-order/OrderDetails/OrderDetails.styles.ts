import styled from 'styled-components'

export const OrderDetailsDiv = styled.div`
	height: 93vh;
	display: grid;
	grid-template-rows: 1fr 1.25fr;
	gap: 2rem;
`

export const OrderItemsDiv = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: repeat(auto-fill, 60px);
	gap: 0.5rem;
	overflow-y: auto;
`