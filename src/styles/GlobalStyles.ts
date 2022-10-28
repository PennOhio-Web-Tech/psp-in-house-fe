import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    /* CSS Variables */
    :root {
        --topNavigationHeight: 56px;
		--text-color: #252525;
        --text-color-white: #f5f4fa;
        --bg-color: #f5f4fa;
	}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body, html {
        background-color: var(--bg-color);
        height: 100%;
        color: var(--text-color);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    #__next {
        height: 100%;
    }
`
