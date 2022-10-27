import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from '../theme';
import { SWRConfig } from 'swr';
import fetcher from '../libs/fetcher';
import React from 'react';
import '../styles/index.scss';
import '../components/Season2/Slider/slick-theme.min.css'
import '../components/Season2/Slider/slick.min.css'
import store from 'redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"
        />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta property="og:site_name" content="El Cubo." />

      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SWRConfig
            value={{
              fetcher: fetcher,
            }}
          >
            <Component {...pageProps} />
          </SWRConfig>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
