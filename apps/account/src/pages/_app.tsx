import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Layout } from '../layout/Layout';
import { queryClient } from '../utils/query.helper';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from '@stratapro/auth-lib';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>StrataPro | Account</title>
      </Head>
      <main className="app">
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </main>
    </AuthProvider>
  );
}

export default CustomApp;
