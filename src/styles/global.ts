import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #F0F2F5;
        --red: #e52e4d;
        --Goldenrod: Goldenrod;
        --blue: #5429cc;
        --green: LimeGreen;

        --blue-light: #6933ff;

        --text-title: Crimson;
        --text-body: black;

        --shape: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Roboto' sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }


    button{
        cursor: pointer;
    }
`