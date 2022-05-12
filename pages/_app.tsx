import '../styles/globals.css'
import type { AppProps } from 'next/app';
import DbProvider from "../context/dbContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  ) 
}

export default MyApp
