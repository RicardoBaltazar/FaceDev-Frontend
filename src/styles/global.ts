import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --white: #FFFFFF;
    --black: #1C1C1C;
    --background: #DDE1E9;
    --primary: #553CFB;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
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
