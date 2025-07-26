import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

/**
 * The custom App component allows us to persist layouts and providers
 * across pages. Here we register a ThemeProvider to enable dark/light
 * mode toggling and inject a document head tag for a consistent title.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Head>
        <title>BiasGuard Dashboard</title>
        <meta
          name="description"
          content="BiasGuard – vizualizácia mediálnej zaujatosti v reálnom čase."
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;