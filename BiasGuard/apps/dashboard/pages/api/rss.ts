import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * API route to fetch and return RSS feed data. In production this would
 * proxy requests to external feeds and cache responses. Here we return
 * dummy articles for demonstration purposes to avoid network calls.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  if (!url || typeof url !== 'string') {
    return res.status(400).json({ message: 'Missing or invalid URL' });
  }
  // TODO: fetch and parse the RSS feed using a library like rss-parser
  const exampleArticles = [
    { title: 'Prvý testovací článok', link: 'https://example.com/1', pubDate: new Date().toISOString() },
    { title: 'Druhý testovací článok', link: 'https://example.com/2', pubDate: new Date().toISOString() },
  ];
  return res.status(200).json({ title: 'Test Feed', items: exampleArticles });
}