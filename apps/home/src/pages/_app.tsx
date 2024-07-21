import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../layout/Layout';
import './styles.css';
import { SessionProvider } from 'next-auth/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Head>
        <title>StrataPro | Home</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SessionProvider>
  );
}

export default CustomApp;
