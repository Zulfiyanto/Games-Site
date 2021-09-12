import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:darkgray;
    }
    body{
        font-family:'Poppins',sans-serif;
        width: 100%;
    }
    h1{
        font-size: 3rem;
            font-family: 'Vollkorn',serif;
            font-weight: medium;
    }
    h4{
        font-size: 1rem;
        padding: 1.3rem 0rem;
        text-decoration: none;
    }
    p{
        font-size: 1rem;
        color: #696969;
        line-height: 200%;
    }
    a{
        text-decoration: none;
        color: #000000;
    }
    img{
        display: block;
    }
}
`;

export default GlobalStyle;
