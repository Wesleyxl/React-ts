import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #ffffff;
    color: #000000;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }
`;
