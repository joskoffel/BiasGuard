import { pipeline } from '@xenova/transformers';

/**
 * The inference module wraps the @xenova/transformers pipeline for bias
 * classification. On the first invocation the model will be lazily loaded
 * and cached for subsequent calls.
 */
let classifier: any;

/**
 * Runs bias inference on a piece of text. The returned score ranges from 0
 * to 1, where values above 0.5 represent positive sentiment and values below
 * 0.5 represent negative sentiment. In the context of bias detection this
 * example assumes a binary sentiment model (DistilBERT fine‑tuned on SST‑2)
 * as a stand‑in. Replace the model with a dedicated bias detection model when
 * available.
 *
 * @param text Text to analyse
 * @returns A promise resolving with an object containing the score
 */
export async function inferBias(text: string): Promise<{ score: number }> {
  if (!classifier) {
    // Lazily load the model on first use. The model is downloaded the first
    // time this function is invoked and cached in the `classifier` variable.
    classifier = await pipeline(
      'text-classification',
      'Xenova/distilbert-base-uncased-finetuned-sst-2-english',
    );
  }
  const output = await classifier(text);
  const score = output?.[0]?.score ?? 0;
  return { score };
}