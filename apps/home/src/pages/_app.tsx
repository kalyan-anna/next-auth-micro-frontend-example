import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { NavBar } from '@stratapro/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>StrataPro | Home</title>
      </Head>
      <main className="app">
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
