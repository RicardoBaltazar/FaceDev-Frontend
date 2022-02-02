/* eslint-disable react/no-invalid-html-attribute */
/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}

export default App;
