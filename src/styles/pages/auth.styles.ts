import styled from 'styled-components'

export const AuthPageContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100%;
`

export const FormLayoutContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	border: 1px solid #cecece;

	border-radius: 0.5rem;
	min-height: 480px;
	width: min(1080px, 80vw);
	box-shadow: 0px 16px 40px #6a6a6a1a;
`

export const FormDescriptionSection = styled.div`
	background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
		url('/images/backdropImage.png');
	background-position: left;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 0.5rem 0 0 0.5rem;

	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 0 2rem;
`

export const FormContainer = styled.div`
	border-left: none;
	background: white;
	padding: 3rem 7rem;
	border-radius: 0 0.5rem 0.5rem 0;
`

export const Separator = styled.div`
	height: 1px;
	width: 100%;
	background: #e0e0e0;
	margin-bottom: 3rem;
`

export const FormTitle = styled.h3`
	margin-bottom: 1rem;
	font-size: 1.25rem;
	color: #444;
`

export const FormTitlePrefix = styled.p`
	margin-bottom: 0.25rem;
	color: #666;
	font-size: 0.9rem;
`

export const ActionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 6rem;

	a {
		color: rgba(0, 0, 0, 0.6);
		text-decoration: underline;
		font-size: 0.9rem;
		transition: color 100ms ease-in-out;

		&:hover {
			color: black;
		}

		@media (max-width: 1280px) {
			font-size: 0.75rem;
		}
	}
`
