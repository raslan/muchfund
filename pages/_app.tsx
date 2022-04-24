import "styles/tailwind.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute='data-theme'
      defaultTheme='dark'
      value={{ light: "winter", dark: "night" }}
    >
      <UserProvider>
        <ApolloProvider client={client}>
          <div className='min-h-screen w-full'>
            <Component {...pageProps} />
          </div>
        </ApolloProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
