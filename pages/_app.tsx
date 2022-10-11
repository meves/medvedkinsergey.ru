import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar"
import { Provider } from 'react-redux'
import { store } from '../client/store'
import { AppLayout } from '../components/common/Layout/AppLayout'
import ErrorBoundary from '../components/shared/ErrorBoundary'
import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps }
}: AppProps) {
  
  return (
    <>
      <NextNProgress color="darkblue"/>

      <Provider store={store}>
        <ErrorBoundary>
          <SessionProvider session={session}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </SessionProvider>
        </ErrorBoundary>
      </Provider>
    </>)
}

export default MyApp
