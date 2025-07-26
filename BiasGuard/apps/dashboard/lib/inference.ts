/**
 * Call the bias inference API. The API should accept a POST body with a
 * `text` field and return a JSON response containing the bias score and
 * explanatory data. This helper centralises the fetch logic for ease of
 * reuse across the application.
 */
export async function inferBias(text: string) {
  const res = await fetch('/api/infer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    throw new Error(`Inference API returned status ${res.status}`);
  }
  return res.json();
}