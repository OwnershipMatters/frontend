import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {

        /* COLORS */
        --theme-color: #933D1B;
        --background-color: none;

        /* FONT FAMILY */
        --primary-font: 'Playfair Display', serif;
        --secondary-font: 'Nixie One', cursive;

        /* SCREEN SIZES */
        --mobile-screen: 480px;
        --desktop-screen: 769px;
    }
    
    *{
        color: black;
        font-family: var(--primary-font);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body{
        background-color: #f5f5f5; 
        display: flex;
        justify-content: center;
    };

    h1{
        font-family: 'Playfair Display', serif;
        font-weight: 900;
    };

    h2{
        font-family: 'Playfair Display SC', serif;
    };

    h3{
        font-family: 'Poppins', sans-serif;
    };

    a:link {
        text-decoration: none;
    };

    a:visited {
        text-decoration: none;
    };

    a:hover {
        text-decoration: none;
    };

    a:active {
        text-decoration: none;
    };

    ::-webkit-scrollbar {
    width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f2f2f2;
        border-radius: 20px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 30px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    } 
`;
