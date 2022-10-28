import { forOwn } from 'cypress/types/lodash'
import styled from 'styled-components'

export const Button = styled.button`
	background: #648de5;
	padding: 1rem 4rem;
	border: none;
	border-radius: 0.25rem;
	box-shadow: 0px 3px 6px #00000029;

	color: white;
	text-transform: uppercase;
	font-weight: 500;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`
