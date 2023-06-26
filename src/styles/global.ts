import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FCF0F0;
        --text: #272727;
        --white: #ffffff;
        --purple_100: #DCD6F0;
        --purple_200: #9882E3;
        --purple_300: #4C3692;
        --red_100: #FFDAD3;
        --red_200: #F46142;
        --red_300: #AF3015;
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
        @media (max-width: 1080px) {
            font-size: 93.75%; 
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        @media (max-width: 480px) {
            font-size: 81.25%;
        }
    }

    body {
        background-color: var(--background);
    }
    
    body, h1, h2, h3, p{
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
        font-weight: normal;
        color: var(--text);
        
    }

    p {
        font-weight: 600;
    }

    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }


   .MuiAutocomplete-inputRoot {
        height: 40px;
        background-color: var(--white);
        width: 240px;
        border-radius: 4px;
        outline: none;
        border: 1px solid #C2D1D9;
        color: #C2D1D9;
        font-family: 'Raleway', sans-serif;
    }
`