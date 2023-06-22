import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "TAEBAEKmilkyway";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/TAEBAEKmilkyway.woff2")format("woff2");
        font-weight: normal;
        font-style: normal;
    }

    * {
        font-family: "TAEBAEKmilkyway";
        font-weight: bold;
        font-style: normal;
    }

    body {
        background-color: #eef1ff
    }
`;

export default GlobalStyle;
