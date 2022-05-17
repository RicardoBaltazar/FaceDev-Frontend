/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/no-invalid-html-attribute */
/* eslint-disable react/jsx-props-no-spreading */
import { useState, createContext } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import { lightTheme, darkTheme } from '../theme';

export const ThemeContext = createContext({} as any);

function App({ Component, pageProps }: AppProps) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  function toggleTheme() {
    setIsLightTheme(!isLightTheme);
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <>
          <Head>
            <title>FaceDev</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <meta
              name="description"
              content="A social networking application created to practice programming"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
