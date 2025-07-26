import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * API route handling bias inference requests. This endpoint should be
 * deployed as a serverless function (Edge or Node). At present it returns
 * a random score and placeholder explanation; replace with actual model
 * inference by integrating @xenova/transformers in a production setting.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  const { text } = req.body;
  if (typeof text !== 'string' || text.trim() === '') {
    return res.status(400).json({ message: 'Invalid text' });
  }
  // TODO: perform real inference using a pre‑trained model. This placeholder
  // generates a pseudo‑random score between -1 and 1 and constructs a
  // dummy explanation based on the input text.
  const fakeScore = Math.round((Math.random() * 2 - 1) * 100) / 100;
  return res.status(200).json({
    score: fakeScore,
    explanation: `Predikované skóre: ${fakeScore}. (Placeholder explanation for \"${text.slice(0, 50)}\"…)`,
  });
}