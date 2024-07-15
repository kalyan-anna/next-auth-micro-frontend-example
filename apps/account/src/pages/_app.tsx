import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Layout } from '../layout/Layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>StrataPro | Account</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
