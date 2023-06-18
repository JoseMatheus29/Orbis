import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FCF0F0;
        --text: #272727;
        --white: #ffffff;
        --purple_100: #F5EEFF;
        --purple_200: #CDBDFF;
        --purple_300: #9882E3;
        --purple_400: #644FAC;
        --red_100: #FFEDE9;
        --red_200: #FFB4A4;
        --red_300: #F46142;
        --red_400: #AF3015;
        --blue_100: #BFF4F8;
        --blue_200: #2DB5BD;
        --blue_300: #19888F;
        --blue_400: #13666B;
        --yellow_100: #FEE98B;
        --yellow_200: #FED366;
        --yellow_300: #FDBC42;
        --yellow_400: #FCA61D;
    }

    html {
        font-size: 16px;
    }

    body {
        background-color: var(--background);
    }
    
    body, h1, h2, h3, p{
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', sans-serif;
        color: var(--text);
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        
    }
`