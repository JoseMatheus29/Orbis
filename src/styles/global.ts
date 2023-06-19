import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FCF0F0;
        --text: #272727;
        --white: #ffffff;
        --purple_100: #DCD6F0;
        --purple_200: #CDBDFF;
        --purple_300: #5C45A5;
        --purple_400: #4E3894;
        --red_100: #FFEDE9;
        --red_200: #FFB4A4;
        --red_300: #F46142;
        --red_400: #AF3015;
        --blue_100: #A3E8EC;
        --blue_200: #12AAB5;
        --blue_300: #12AAB5;
        --blue_400: #19888F;
        --yellow_100: #FFE9B0;
        --yellow_200: #FED366;
        --yellow_300: #FCA61D;
        --yellow_400: #EA9B1D;
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

    .MuiSlider-root {
        background-color: #272727;
    } 
`