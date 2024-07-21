import { AuthProvider } from '@stratapro/auth-lib';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../layout/Layout';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>StrataPro | Home</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </AuthProvider>
  );
}

export default CustomApp;
