import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #121212;
    color: #ffffff;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  * {
    box-sizing: border-box;
  }
`;