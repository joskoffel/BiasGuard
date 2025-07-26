/**
 * Shared inference helper for the ML model. This module is kept in the
 * `libs/ml` workspace so it can be reused by the dashboard and other
 * packages (e.g. CLI tools). In a production implementation this
 * function would load the DistilBERT model via @xenova/transformers and
 * perform inference on the provided text.
 */
export async function inferBias(text: string): Promise<{ score: number; explanation: string }> {
  // TODO: Replace this stub with real inference logic. For now we simply
  // return a random score and a trivial explanation.
  const score = Math.round((Math.random() * 2 - 1) * 100) / 100;
  return {
    score,
    explanation: `Predikované skóre: ${score} pre vstup \"${text.slice(0, 50)}\"...`,
  };
}