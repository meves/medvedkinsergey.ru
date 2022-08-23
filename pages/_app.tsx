import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextNProgress color="darkblue"/>
      <Component {...pageProps} />
    </>)
}

export default MyApp
