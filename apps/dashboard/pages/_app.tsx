import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

/**
 * The custom App component allows us to persist layouts and providers
 * across pages. It injects a consistent document head tag so each page
 * has the same title and description.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BiasGuard Dashboard</title>
        <meta
          name="description"
          content="BiasGuard – vizualizácia mediálnej zaujatosti v reálnom čase."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
