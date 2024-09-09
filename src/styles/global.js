import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        --light-light-100: #ffffff;
        --light-light-200: #fffaf1;
        --light-light-300: #e1e1e6;
        --light-light-400: #c4c4cc;
        --light-light-500: #7c7c8a;
        --light-light-600: #76797b;
        --light-light-700: #4d585e;
        --dark-dark-100: #000405;
        --dark-dark-200: #00070a;
        --dark-dark-300: #000204;
        --dark-dark-400: #000a0f;
        --dark-dark-500: #000c12;
        --dark-dark-600: #00111a;
        --dark-dark-700: #001119;
        --dark-dark-800: #0d161b;
        --dark-dark-900: #0d1d25;
        --dark-dark-1000: #192227;
        --tints-tomato-100: #750310;
        --tints-tomato-200: #92000e;
        --tints-tomato-300: #ab222e;
        --tints-tomato-400: #ab4d55;
        --tints-carrot-100: #fba94c;
        --tints-mint-100: #04d361;
        --tints-cake-200: #82f3ff;
        --tints-cake-100: #065e7c;
    }
    :root{
        font-size: 62.5%;
    }
    body{
        height: 100vh;
        background-color: var(--dark-dark-400);
        font-family: "Roboto", sans-serif;
        //font-family: "Poppins", sans-serif;
    }
    #root{
        height: 100vh;
    }
    input, button, text-area{
        font-family: "Poppins", sans-serif;
        border: none;
    }
    a{
        font-family: "Poppins", sans-serif;
        color: var(--light-light-100);
        text-decoration: none;
    }
`