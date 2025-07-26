/**
 * This module contains helper functions for interacting with external data
 * sources like RSS feeds or Twitter. In a production system you would move
 * these functions to an Edge Function or your backend to avoid CORS issues
 * and to cache results.
 */

export interface Article {
  title: string;
  date: string;
  summary: string;
  url: string;
}

/**
 * Fetch and parse an RSS feed. This example simply fetches the raw XML
 * and returns it as a string. You would normally parse the XML into a
 * structured format using a library such as `xml2js` or `fast-xml-parser`.
 *
 * @param feedUrl URL of the RSS feed to fetch
 */
export async function fetchRSS(feedUrl: string): Promise<string> {
  const res = await fetch(`/api/rss?url=${encodeURIComponent(feedUrl)}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch RSS: ${res.statusText}`);
  }
  const data = await res.json();
  return data.feed as string;
}

/**
 * Fetch tweets for a given handle or hashtag. This function is a stub
 * demonstrating the expected shape of a real implementation. In practice
 * you should implement server‑side logic (e.g. a Next.js API route) that
 * calls the Twitter API using OAuth credentials.
 *
 * @param query Twitter handle or search query
 */
export async function fetchTwitter(query: string): Promise<Article[]> {
  // Placeholder implementation
  console.warn('fetchTwitter is not implemented. Returning mock data.');
  return [
    {
      title: `Mock tweet about ${query}`,
      date: new Date().toISOString(),
      summary: 'This is a mock tweet returned by fetchTwitter.',
      url: 'https://twitter.com',
    },
  ];
}

/**
 * Normalise raw data into a structure suitable for charting. This example
 * simply maps an array of articles into objects with a `date` and
 * `score` property. You can enrich this function to compute bias scores
 * via your inference service or to aggregate multiple articles per day.
 */
export function normalizeData(articles: Article[]): { date: Date; score: number }[] {
  return articles.map(article => ({
    date: new Date(article.date),
    score: Math.random() * 2 - 1, // Random placeholder value between -1 and 1
  }));
}