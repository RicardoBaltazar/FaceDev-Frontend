import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
