import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar"
import ErrorBoundary from '../components/utils/ErrorBoundary'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="darkblue"/>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>)
}

export default MyApp
