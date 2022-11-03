import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    /* CSS Variables */
    :root {
        --topNavigationHeight: 70px;
        --footerHeight: 62.5px;
		--text-color: #252525;
        --text-color-white: #f5f4fa;
        --bg-color: #f5f4fa;
        --toastify-color-info: ${({ theme }) => theme.colors.pageUi.componentHighlight};
        --toastify-color-success: ${({ theme }) => theme.colors.pageUi.componentHighlight};
        --toastify-color-warning: ${({ theme }) => theme.colors.navigation.bg.secondary};
        --toastify-color-error: ${({ theme }) => theme.colors.status.error};
        --toastify-toast-width: 360px;
	}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body, html {
        background-color: ${({ theme }) => theme.colors.pageUi.pageBg};
        height: 100%;
        color: ${({ theme }) => theme.colors.text.primary};
        font-family: ${({ theme }) => theme.fonts.body};
        overflow-x: hidden;
    }

    input, textarea {
        font-family: ${({ theme }) => theme.fonts.body};
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: ${({ theme }) => theme.fonts.header};
        color: ${({ theme }) => theme.colors.text.primary};
        font-weight: 600;
    }

    p {
        font-family: ${({ theme }) => theme.fonts.body}; 
        color: ${({ theme }) => theme.colors.text.secondary};
        white-space: pre-line;
    }

    h1 {
        font-size: 3.052rem;
        line-height: 4.5rem;
    }

    h2 {
        font-size: 2.441rem;
        line-height: 3.5rem;
    }

    h3 {
        font-size: 1.953rem;
        line-height: 2.5rem;
    }

    h4 {
        font-size: 1.563rem;
        line-height: 2rem;
    }

    h5 {
        font-size: 1.25rem;
        line-height: 1.5rem;
    }

    h6 {
        font-size: 1.125rem;
        line-height: 1.25rem;
    }

    p, span {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    button {
        font-family: ${({ theme }) => theme.fonts.header};
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 1.25px;
    }
    
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text.secondary};
        font-family: ${({ theme }) => theme.fonts.body};
    }

    .errorMessage {
        color: ${({ theme }) => theme.colors.status.error};
        font-size: 0.9rem;
        position: absolute;
        top: 100%;
        left: 0;
        width: max-content;
    }

    #__next {
        height: 100%;
    }

    .Toastify__toast-body {
        padding: 1rem;
    }

    .Toastify__toast-body > div:last-child {
        width: fit-content;
    }

    .Toastify__toast-icon {
        margin-inline-end: 1rem;
    }

    .Toastify__close-button {
        svg {
            width: 18px;
            height: 18px;
        }
    }
`
