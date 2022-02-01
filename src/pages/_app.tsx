/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
