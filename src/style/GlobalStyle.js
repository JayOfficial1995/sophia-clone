import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;

        body {
            font-family: 'Lato', sans-serif;

            * {
                margin : 0;
                padding: 0;
                box-sizing: border-box;
            }

            h1 {
                font-size: 2.9rem
            }

            h2 {
                font-size: 1.8rem;
            }

            p {
            font-size: 1.8rem;
            }
        }
    }
`;

export default GlobalStyle;
