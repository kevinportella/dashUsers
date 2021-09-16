import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from "next/head"
import { ContextProvider } from '~/ContextAPI';

import { theme } from '~/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

    <Head>
      <title>List users </title>

      <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />

      <meta
        name="description"
        content="List users"
      />

      <meta name="keywords" content="List users, users, List" />
    </Head>

      <ChakraProvider theme={theme}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
