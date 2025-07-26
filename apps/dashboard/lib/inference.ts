import { inferBias as mlInfer } from '@/ml/inference';

/**
 * This wrapper re‑exports the inference function from the shared ML library. In
 * your UI code you can import `inferBias` from `@/lib/inference` to run
 * inference either directly in the browser (via Transformers.js) or via
 * an API call. For SSR or Edge Functions prefer calling the API route.
 */
export async function inferBias(text: string) {
  return mlInfer(text);
}