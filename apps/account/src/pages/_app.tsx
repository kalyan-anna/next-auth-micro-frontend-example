import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Layout } from '../layout/Layout';
import { queryClient } from '../utils/query.helper';
import { QueryClientProvider } from '@tanstack/react-query';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>StrataPro | Account</title>
      </Head>
      <main className="app">
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </main>
    </>
  );
}

export default CustomApp;
