import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar"
import { Provider } from 'react-redux'
import { store } from '../client/store'
import { Layout } from '../components/common/Layout'
import ErrorBoundary from '../components/common/ErrorBoundary'
import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="darkblue"/>

      <Provider store={store}>
        <ErrorBoundary>
          <SessionProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </ErrorBoundary>
      </Provider>
    </>)
}

export default MyApp
