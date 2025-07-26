import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';

/**
 * Custom App component to initialise global state providers such as React Query
 * and to import global styles. Using a ref to store the QueryClient
 * guarantees that only one instance is created across renders.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}