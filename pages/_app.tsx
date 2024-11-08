import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Samrawit Dawit</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
