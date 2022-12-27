import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar"
import { Provider } from 'react-redux'
import { store } from '../client/store'
import { AppLayout } from '../components/common/Layout/AppLayout'
import ErrorBoundary from '../components/shared/ErrorBoundary'
import { SessionProvider } from 'next-auth/react'
// include global styles
import '../styles/globals.css'

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps }
}: AppProps) {
  
  return (
    <>
      <NextNProgress color="darkblue"/> {/** progress bar for app and its color */}

      <Provider store={store}> {/** redux store provider: /client/store/index.tsx */}
        <ErrorBoundary>
          <SessionProvider session={session}> {/** auth provider for authentication: /pages/api/auth/[...nextauth].js */}
            <AppLayout> {/** main layout used through the app */}
              <Component {...pageProps} />
            </AppLayout>
          </SessionProvider>
        </ErrorBoundary>
      </Provider>
    </>)
}

export default MyApp
