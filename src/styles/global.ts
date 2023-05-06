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
        font-family: 'Fira Sans', sans-serif;
        color: #484848;
        box-sizing: border-box;
        padding: 16px;
    }

    * {
        margin: 0;
        padding: 0;
    }
`