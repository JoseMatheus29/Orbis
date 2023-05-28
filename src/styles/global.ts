import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-body: #141318;
        --background: #222428;
        --bg-secundary: #2C2C30;
        --blue-color: #478CF8;
        --font-color: #fff;
        --font-gray: #6F7175;
    }

    html {
        font-size: 16px;
    }

    body{
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', sans-serif;
        color: #484848;
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        
    }
`