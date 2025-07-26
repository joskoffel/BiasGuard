import axios from 'axios';

/**
 * Fetch an RSS feed via the serverless API. The API caches results to
 * minimise external requests. Supply a fully qualified URL for the feed.
 */
export async function fetchRSS(url: string) {
  const res = await axios.get(`/api/rss?url=${encodeURIComponent(url)}`);
  return res.data;
}

/**
 * Fetch recent tweets for the given username. In a full implementation
 * this would call an API endpoint backed by the Twitter API or a cached
 * data source. Here we return a placeholder.
 */
export async function fetchTwitter(username: string) {
  // TODO: integrate with Twitter API or backend
  return [];
}

/**
 * Normalise heterogeneous data from various feeds into a unified format.
 * This helper is application specific and left unimplemented here.
 */
export function normalizeData(raw: any) {
  return raw;
}