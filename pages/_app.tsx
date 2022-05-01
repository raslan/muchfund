import { ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from 'components/Layout';
import client from 'lib/apollo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import 'styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute='data-theme'
      defaultTheme='dark'
      value={{ light: 'winter', dark: 'night' }}
    >
      <UserProvider>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
