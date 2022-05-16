import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --white: ${(props) => props.theme.white};
    --black: ${(props) => props.theme.black};
    --background: ${(props) => props.theme.background};
    --primary: ${(props) => props.theme.primary};
    --card: ${(props) => props.theme.card};
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
